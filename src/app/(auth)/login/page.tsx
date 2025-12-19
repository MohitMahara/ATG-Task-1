"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post("/api/auth/login", formData);
      alert(data.message);
      login(data.user, data.token);
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof AxiosError)
        setError(
          err.response?.data?.message || "Something went wrong in login"
        );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex  justify-center flex-col py-6  h-full">
      <h1 className="text-4xl font-semibold text-left self-start">Login</h1>
      <p className="mt-2.5 text-white/50 max-w-sm">
        A good design is not only aesthetically pleasing, but also functional.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-sm w-full">
        {error && (
          <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
            {error}
          </p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email (e.g. Sincere@april.biz)"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg bg-[#1A1C22] px-4 py-3 text-sm text-white outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-lg bg-[#1A1C22] px-4 py-3 text-sm text-white outline-none"
        />
        <Button type="submit" className="py-4 px-6 w-full" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
         <p className="mt-4 text-sm text-white/50">
          Don't have an account?{" "}
          <Link href="/signup" className="text-white">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
