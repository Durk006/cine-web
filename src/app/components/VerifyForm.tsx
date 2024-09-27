import { FormEvent } from "react";

interface VerifyFormProps {
    handleVerify: (e: FormEvent) => void;
    code: string;
    setCode: (value: string) => void;
}

const VerifyForm = ({ handleVerify, code, setCode }: VerifyFormProps) => {
    const handleSubmit = (e: FormEvent) => {
        console.log("Form submitted."); // Log when the form is submitted
        console.log("Verification code:", code); // Log the verification code
        handleVerify(e); // Call the provided handleVerify function
    };

    return (
        <div>
            <h1>Verification Code</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={code}
                    id="code"
                    name="code"
                    onChange={(e) => {
                        console.log("Code input changed:", e.target.value); // Log the updated code
                        setCode(e.target.value); // Update the code state
                    }}
                />
                <button type="submit">
                    Complete sign up
                </button>
            </form>
        </div>
    );
}

export default VerifyForm;
