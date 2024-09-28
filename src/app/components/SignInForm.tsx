"use client"
import Link from "next/link";
import { FormEvent } from 'react';

interface SignInFormProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SignInForm = ({ signInWithEmail, clerkError }: SignInFormProps) => {
  return (
    <div>
      <h1>Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
          };
          const email = target.email.value;
          const password = target.password.value;
          signInWithEmail({ emailAddress: email, password: password });
        }}
      >
        <input
          name="email"
          placeholder="Email address"
          type="email"
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        {clerkError && <p>{clerkError}</p>}
        <button type="submit">
          Sign in
        </button>
      </form>
      <p>
        Don't have an account?
        <Link href="/sign-up"> Sign up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
