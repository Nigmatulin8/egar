export default {
    updateUsersList(state, deletedUser) {
        let deleteItemIndex = state.users.findIndex(user => user.id === deletedUser.id);

        state.users.splice(deleteItemIndex, 1);
    },

    updateUser(state, updatedUser) {
        let updatedUserIndex = state.users.findIndex(user => user.id === updatedUser.id);

        state.users[updatedUserIndex] = { ...updatedUser };
    },

    updateFavoriteStatus(state, updatedUser) {
        let updatedUserIndex = state.users.findIndex(user => user.id === updatedUser.id);

        state.users[updatedUserIndex] = { ...updatedUser };
    },
}
