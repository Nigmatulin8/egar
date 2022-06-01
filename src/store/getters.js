export default {
    usersList(store) {
        if (!store.users)
            return [];

        return store.users;
    },
};
