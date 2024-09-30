"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Home from "./pages/home";

export default function title_page() {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn && <Home/>}
      <div>
        {!isSignedIn ? (
          <div>
            <Link href="/sign-up">Signup</Link>
            <Link href="/sign-in">Login</Link>
          </div>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
}