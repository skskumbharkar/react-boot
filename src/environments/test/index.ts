import environment from '../base';
import { BaseEnv } from '../../models/base-env';

const baseApi = 'http://www.your-production-api.com';
const env: BaseEnv = environment(baseApi);
export default {
    ...env,
    isQA: true,
};
