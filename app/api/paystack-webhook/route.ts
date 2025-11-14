import { NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      console.error("Missing PAYSTACK_SECRET_KEY");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    // Read raw body
    const rawBodyBuffer = await req.arrayBuffer();
    const rawBody = Buffer.from(rawBodyBuffer).toString("utf8");

    // Verify signature
    const signature = req.headers.get("x-paystack-signature");
    const expected = crypto
      .createHmac("sha512", secret)
      .update(rawBody)
      .digest("hex");

    if (signature !== expected) {
      console.error("Invalid Paystack signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Parse the verified event
    const event = JSON.parse(rawBody);

    // Supabase (server role)
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    if (event.event === "charge.success") {
      const email = event.data.customer.email;
      const reference = event.data.reference;

      const { error } = await supabase
        .from("students")
        .update({
          paid: true,
          payment_reference: reference
        })
        .eq("email", email);

      if (error) {
        console.error("Supabase update error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      console.log(`Payment marked as paid for ${email}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
