import { useAuth, useUser } from '@clerk/nextjs';
import Gandalf from '../components/Gandalf';
import connect from '@gandalf-network/connect';

const Home = () => {
    const {sessionId } = useAuth();
    const {user} = useUser();

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome, {user.username}!</h1>
                    <p>Your session ID is: {sessionId}</p>
                    <Gandalf/>
                </>
            ) : (
                <p>Please sign in.</p>
            )}
        </div>
    );
};

export default Home;
