"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Home from "./pages/home";
import Onboarding from "./Onboarding";

export default function TitlePage() {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? <Home /> : <Onboarding />} 
      {isSignedIn && <UserButton afterSignOutUrl="/" />}
    </div>
  );
}
