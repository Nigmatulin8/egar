import { userMutations } from '@/store/helpers/mutationTypes';

const DB_URL = 'https://jsonplaceholder.typicode.com/';

export default {
    getAllUsers({ state, commit }) {
        fetch(DB_URL + 'posts')
            .then((response) => response.json())
            .then((users) => {
                commit(userMutations.ALL_USERS, users);
            });
    },

    createUser({ state, commit }, user) {
        let newUser = {
            firstName: user.firstName || 'Unknown',
            secondName: user.secondName || 'Unknown',
            patronymicName: user.patronymicName || '',
            department: user.department || 'Unknown',
            birthDate: user.body || '00.00.0000',
            address: user.address || 'Unknown',
            about: user.about || '',
        };

        // Кладем на сервер
        fetch(DB_URL + 'posts', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            // Обновляем в сторе
            .then((user) => commit(userMutations.ADD_USER, user));
    }
}