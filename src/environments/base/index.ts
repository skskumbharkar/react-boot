import { BaseEnv } from 'models/base-env';

export default (baseApi: string): BaseEnv => {
    return {
        intervals: {
            logout: 3600, // 1 hour in seconds
        },
        api: {
            dashboard: `${baseApi}/api/v1/dashboards`,
        },
        token: {
            auth: process.env.AUTH_TOKEN,
        },
        isProduction: true,
        isDevelopment: false,
        isQA: false,
    };
};
