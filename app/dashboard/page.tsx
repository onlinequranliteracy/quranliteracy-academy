import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const admin = cookies().get("admin_auth");

  if (!admin || admin.value !== "true") {
    redirect("/admin");
  }

  return <div>Dashboard</div>;
}
