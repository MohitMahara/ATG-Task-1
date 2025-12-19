"use client";

import { useEffect, useState } from "react";
import StatsCard from "./components/StatsCard";
import Link from "next/link";

interface UserType {
  id: string;
  name: string;
  email: string;
}
export default function DashboardPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
    
  }, []);

  // Skeleton loader component
  const UserSkeleton = () => (
    <div className="flex items-center gap-3 bg-[#23232a] p-3 rounded-xl animate-pulse">
      <div className="w-9 h-9 rounded-full bg-[#2a2a31]"></div>
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-[#2a2a31] rounded w-3/4"></div>
        <div className="h-2 bg-[#2a2a31] rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="p-8 text-white space-y-8 mt-20">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back, here is an overview</p>
      </div>

      {/* Top Stats + Avatars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <StatsCard title="Total Users" value={loading ? 0 : users.length} />

        {/* User Avatars */}
        <div className="bg-[#18181c] rounded-2xl p-6 md:col-span-2">
          <h3 className="text-sm text-gray-400 mb-4">Users</h3>

          <div className="flex -space-x-3">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-[#2a2a31] animate-pulse"
                  ></div>
                ))
              : users.slice(0, 8).map((user) => (
                  <div
                    key={user.id}
                    className="w-10 h-10 rounded-full bg-[#2a2a31] flex items-center justify-center text-sm font-medium border border-[#18181c]"
                  >
                    {user.name.charAt(0)}
                  </div>
                ))}
          </div>
          <Link
            href="/dashboard/users"
            className="inline-block mt-4 text-sm text-[#A465B8]"
          >
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Hide users" : "View all users →"}
            </button>
          </Link>

          {/* Show all users if toggled */}
          {showAll && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <UserSkeleton key={index} />
                  ))
                : users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-3 bg-[#23232a] p-3 rounded-xl"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#2a2a31] flex items-center justify-center text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1">
        {/* Profile */}
        

        {/* Recent Users */}
        <div className="md:col-span-2 bg-[#18181c] rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>

          <div className="space-y-3">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <UserSkeleton key={index} />
                ))
              : users.slice(0, 5).map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between bg-[#23232a] rounded-xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#2a2a31] flex items-center justify-center text-sm">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
