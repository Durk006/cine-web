import Link from 'next/link';
import React from 'react';

function Onboarding() {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-4">Welcome to Our App</h1>
      <div className="space-x-4">
        <Link href="/sign-up">
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition">Signup</button>
        </Link>
        <Link href="/sign-in">
          <button className="bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-500 transition">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
