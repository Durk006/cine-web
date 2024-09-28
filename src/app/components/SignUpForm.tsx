import Link from "next/link";

interface SignUpFormProps {
    signUpWithEmail: ({ username, emailAddress, password }: { username: string; emailAddress: string; password: string }) => void;
    clerkError: string;
}

const SignupForm = ({ signUpWithEmail, clerkError }: SignUpFormProps) => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        username: { value: string };
                        email: { value: string };
                        password: { value: string };
                    };
                    const username = target.username.value;
                    const email = target.email.value;
                    const password = target.password.value;
                    signUpWithEmail({ username, emailAddress: email, password });
                }}
            >
                <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    required
                />
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
                <button type="submit">Create an account</button>
            </form>
            <p>
                Already have an account?
                <Link href="/sign-in">Login</Link>
            </p>
        </div>
    );
};

export default SignupForm;
