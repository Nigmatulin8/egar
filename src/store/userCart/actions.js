import { userCartMutations } from "@/store/helpers/mutationTypes";

export default {
    updateUser({ state, commit }, user) {
        // const updateUrl = `https://jsonplaceholder.typicode.com/posts/${user.id}/`;
        //
        // fetch(updateUrl, {
        //     method: 'PUT',
        //     body: JSON.stringify(user),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then(user => commit(userCartMutations.UPDATE_USER, user));

        /**
         * Обновляем даные только в сторе, т.к. на самом сервере реально данные не обновляются и прилетает ошибка
         * из-за обращения к несуществующемуся эл-у. Если бы обновлялось, тогда fetch будет рабочим, но сейчас
         * закомментировал, чтоб ошибка не падала в консоль.
         */

        commit(userCartMutations.UPDATE_USER, user);
    },

    deleteUser({ state, commit }, user) {
        const deleteUrl = 'https://jsonplaceholder.typicode.com/posts/' + user.id;

        // Удаляем с сервера
        fetch(deleteUrl, {
            method: 'DELETE',
            // Удаляем из стора
        }).then(() => commit(userCartMutations.UPDATE_LIST, user));
    },
}