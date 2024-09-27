import { FormEvent } from "react";

interface VerifyFormProps {
    handleVerify: (e: FormEvent) => void;
    code: string;
    setCode: (value: string) => void;
}

const VerifyForm = ({ handleVerify, code, setCode }: VerifyFormProps) => {
    return (
        <div>
            <h1>Verification Code</h1>
            <form onSubmit={handleVerify}>
                <input
                    value={code}
                    id="code"
                    name="code"
                    onChange={(e) => {
                        console.log("Code input changed:", e.target.value);
                        setCode(e.target.value);
                    }}
                />
                <button type="submit">Complete sign up</button>
            </form>
        </div>
    );
};

export default VerifyForm;
