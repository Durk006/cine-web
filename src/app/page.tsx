"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useCsv } from './context/CsvContext';

export default function title_page() {
  const { isSignedIn } = useUser();
  const { csvData } = useCsv();  // Access csvData from context


  return (
    <div>
      <h1>Hello!</h1>
      {isSignedIn && 
      <div> 
        <h1>You are logged in!</h1>
        <Link href = "/upload">Upload</Link>
        <br/>
        <Link href = "/watchHistory">Watch History</Link>
        <br/>
        <Link href = "/genre">Top Genre's</Link>
      </div>
      }
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
