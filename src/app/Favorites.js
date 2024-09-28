"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Home from "./pages/home";

export default function title_page() {
  const { isSignedIn } = useUser();

  return (
    <main className="bg-slate-700 min-h-screen p-20">
      <div className="mb-12">
        <MovieListHeading heading="Movie Gallery"/>
        <p className="text-center text-2xl text-white">Welcome to Movie Gallery!</p>
        <div className="flex flex-col items-center justify-center mt-6">
            <SearchBox value={searchValue} onChange={setSearchValue} onClear={handleClearSearch} />
            {isLoading && <p className="text-white">Loading...</p>}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </div>
      </div>
      
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
