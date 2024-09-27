"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function title_page() {
  const { isSignedIn } = useUser();

  return (
    <div>
      <h1>Hello!</h1>
      {isSignedIn && <h1>You are logged in!</h1>}
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
