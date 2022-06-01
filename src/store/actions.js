import userActions from '@/store/user/actions';
import userCartActions from '@/store/userCart/actions';

export default {
    ...userActions,
    ...userCartActions,
};
