"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import * as z from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
const LINK = process.env.NEXT_PUBLIC_API_LINK;

const loginSchema = z.object({
  eId: z.string().min(1, "Employee ID is required"),
  password: z.string().min(1, "Password is required"),
});

export default function Login() {
  const [eId, setEId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ eId?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ eId, password });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        eId: fieldErrors.eId?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    setErrors({});
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`${LINK}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employee_id: eId,
          password,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setMessage("Invalid credentials. Please try again.");
        } else {
          setMessage("An error occurred. Please try again later.");
        }
        return;
      }

      const data = await response.json();
      setMessage("Login successful!");
      console.log("User data:", data.user);
      // Handle redirection or token storage here
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-[380px] md:w-max-w[450px] w-full">
      <form onSubmit={handleSubmit} className="w-full px-10 py-5 space-y-3">
        <div className="w-full">
          <Label htmlFor="eId" className="text-white text-lg">
            Employee ID
          </Label>
          <Input
            type="text"
            name="eId"
            id="eId"
            value={eId}
            className="backdrop-blur-3xl bg-white"
            onChange={(e) => setEId(e.target.value)}
            placeholder="Enter Employee ID"
          />
          {errors.eId && (
            <p className="text-red-500 text-sm mt-1">{errors.eId}</p>
          )}
        </div>
        <div className="w-full relative">
          <Label htmlFor="password" className="text-white text-lg">
            Password
          </Label>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            className="backdrop-blur-3xl bg-white"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          {password && (
            <Button
              variant="link"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[46px] transform -translate-y-1/2 text-light"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          )}
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
        {message && (
          <p
            className={`text-sm mt-2 ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <div className="mt-2">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400"
            variant="default"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}
