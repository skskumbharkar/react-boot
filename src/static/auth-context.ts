import { createContext } from 'react';
import { Auth } from 'models/auth';

export const AuthContext = createContext<Auth>({
    user: '',
    signIn: () => new Promise((resolve) => resolve),
    signOut: () => new Promise((resolve) => resolve),
});
