export const FakeAuth = {
    isAuthenticated: false,
    signIn: async (): Promise<void> => {
        FakeAuth.isAuthenticated = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    signOut: async (): Promise<void> => {
        FakeAuth.isAuthenticated = false;
        await new Promise((resolve) => setTimeout(resolve, 1000));
    },
};
