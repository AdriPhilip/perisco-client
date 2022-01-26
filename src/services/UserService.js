export default {
    getSession(payload) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(payload),
        }).then((response) => response.json());
        return res;
    },
    async createUser(user) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/user`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json());
        return res;
    },
    updateUser(user) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/user/${user.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json());
        return res;
    },
    deleteUser(userId) {
        const res = fetch(`${process.env.VUE_APP_MODULO_API}/register/${userId}`,
        {
            method: 'DELETE',
        }).then((response) => response.json());
        return res;
    }
};