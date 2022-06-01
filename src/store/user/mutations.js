export default {
    getAllUsers(state, users) {
        state.users = users;
    },

    addUser(state, user) {
        state.users.push(user);
    },
};
