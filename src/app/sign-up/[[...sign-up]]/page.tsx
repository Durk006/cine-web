"use client";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SignupForm from "@/app/components/SignUpForm";
import VerifyForm from "@/app/components/VerifyForm";

export default function SignUp() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [clerkError, setClerkError] = useState("");
    const router = useRouter();
    const [verifying, setVerifying] = useState(false);
    const [code, setCode] = useState("");

    const signUpWithEmail = async ({
        username,
        emailAddress,
        password,
    }: {
        username: string;
        emailAddress: string;
        password: string;
    }) => {
        if (!isLoaded) return;

        try {
            await signUp.create({ username, emailAddress, password });
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setVerifying(true);
        } catch (err: any) {
            setClerkError(err.errors[0].message);
        }
    };

    const handleVerify = async (e: FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push("/");
            } else {
                console.log("Verification incomplete:", completeSignUp);
            }
        } catch (err) {
            console.log("Error during verification:", err);
        }
    };

    return (
        <>
            {!verifying ? (
                <SignupForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />
            ) : (
                <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />
            )}
        </>
    );
}
