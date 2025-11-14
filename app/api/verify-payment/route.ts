import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { reference, student } = await req.json();

    if (!reference || !student?.email) {
      return NextResponse.json(
        { error: "Missing reference or student information" },
        { status: 400 }
      );
    }

    // 🟢 Create secure Supabase client (server-side only)
    const supabase = createClient(
      process.env.SUPABASE_URL!,               // ❗ Server keys, NOT NEXT_PUBLIC
      process.env.SUPABASE_SERVICE_ROLE_KEY!   // ❗ Full access key
    );

    // 🟢 Verify payment from Paystack
    const verifyRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const result = await verifyRes.json();
    console.log("Paystack verify response:", result);

    if (!result.status || result.data.status !== "success") {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // 🟢 Payment verified — insert student
    const { error: dbError } = await supabase.from("students").insert({
      full_name: student.fullName,
      email: student.email,
      password: student.password,
      days_per_week: student.daysPerWeek,
      courses: student.courses,
      class_type: student.classType,
      paid: true,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Database error", details: dbError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Verify Payment Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
