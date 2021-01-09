export type BaseEnv = {
    intervals: {
        logout: number;
    };
    api: {
        dashboard: string;
    };
    token: {
        auth: string | undefined;
    };
    isProduction: boolean;
    isDevelopment: boolean;
};
