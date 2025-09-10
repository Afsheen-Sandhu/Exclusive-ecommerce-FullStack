// app/admin/dashboard/page.tsx
import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, Exclusive Admin!</h1>
      <p>Here you can manage products, orders, users, and view analytics.</p>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6  shadow rounded border border-secondary">Products: 120</div>
        <div className="p-6 shadow rounded border border-secondary">Orders: 34</div>
        <div className="p-6 shadow rounded border border-secondary">Users: 56</div>
      </div>
    </div>
  );
}
