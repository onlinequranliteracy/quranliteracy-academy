"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (!data.success) {
      setError("Invalid password");
      return;
    }

    window.location.href = "/admin/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-4">Admin Login</h1>

        <input
          type="password"
          className="border px-3 py-2 w-full"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600 mt-2">{error}</p>}

        <button className="bg-green-600 text-white px-4 py-2 mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
