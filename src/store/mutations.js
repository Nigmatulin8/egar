import userMutations from '@/store/user/mutations';
import userCartMutations from '@/store/userCart/mutations';

export default {
    ...userMutations,
    ...userCartMutations,
};
