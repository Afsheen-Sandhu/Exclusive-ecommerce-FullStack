"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import OrderHistory from "@/components/profile/OrderHistory";
import ProfileTabs from '@/components/profile/ProfileTabs';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"info" | "orders">("info");

  useEffect(() => {
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Fetch the logged-in user
 * @returns {Promise<void>}
 */
/*******  4d508460-17fc-4cfe-a4ac-f9f28f5d9ebb  *******/    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me", { withCredentials: true });
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="px-6 py-5"> 
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "info" && <PersonalInfoForm user={user} setUser={setUser} />}
      {activeTab === "orders" && <OrderHistory orders={user.orders} />}
    </div>
  );
}
