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

export const useOpenClose = (initial = false) => {
    const [isOpen, setOpen] = useState(initial);

    const open = () => {
        setOpen(true);
    };
    const close = () => {
        setOpen(false);
    };

    return { isOpen, open, close };
};
