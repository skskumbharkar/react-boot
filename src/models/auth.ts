export type Auth = {
    user: string;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
};
