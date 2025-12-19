
"use client";

import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import UserCardSkeleton from "../components/UserCardSkeleton";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  const displayedUsers = showAll ? filteredUsers : filteredUsers.slice(0, 6);

  return (
    <div className="p-8 text-white space-y-8 mt-20">
      
      {/* --- UNIQUE HEADER SECTION --- */}
      <div className="flex flex-row gap-2 md:gap-4 items-center justify-between bg-[#1A1C22]/50 p-4 rounded-2xl border border-gray-800 shadow-xl">
        {/* search bar */}
        <div className="relative w-[70%] lg:w-full max-w-md">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-2.5 rounded-xl bg-[#0F1115] border border-gray-700 text-white focus:border-[#A465B8] outline-none transition-all placeholder-gray-500"
          />
        </div>

        {/* Right: Actions (Sort + Profile) */}
        <div className="flex items-center gap-4">
          {/* Enhanced Sort Button */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center gap-2 px-2 md:px-4 py-2 bg-[#2A2D35] hover:bg-[#363a45] border border-gray-700 rounded-xl text-sm font-medium transition-all active:scale-95"
          >
            <span className="text-[#A465B8] font-bold">
              {sortOrder === "asc" ? "↑ A-Z" : "↓ Z-A"}
            </span>
            <span className="text-gray-400">Sort</span>
          </button>

  
         
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: users.length },
          { label: "Active", value: users.length },
          { label: "Pending", value: 3 },
          { label: "Admins", value: 2 },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1A1C22] border border-gray-800 rounded-2xl p-5 hover:border-gray-600 transition shadow-sm">
            <h2 className="text-xs uppercase tracking-wider text-gray-500 font-bold">{stat.label}</h2>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* --- USERS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <UserCardSkeleton key={index} />)
          : displayedUsers.map((user) => <UserCard key={user.id} user={user} />)}
      </div>

 
      {!loading && filteredUsers.length > 6 && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative group px-8 py-3 font-semibold text-white transition-all"
          >
            <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-[#F9959D] to-[#A465B8]"></span>
            <span className="relative">{showAll ? "Show Less" : "Show More"}</span>
          </button>
        </div>
      )}
    </div>
  );
}