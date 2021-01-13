import { useState } from 'react';
import { FakeAuth } from 'static/fake-auth';
import { Auth } from 'models/auth';

export const useAuth = (): Auth => {
    const [user, setUser] = useState<string>('');

    const signIn = async () => {
        await FakeAuth.signIn();
        setUser('user');
    };

    const signOut = async () => {
        await FakeAuth.signOut();
        setUser('');
    };

    return {
        user,
        signIn,
        signOut,
    };
};
