export default {
    async createChild(child) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/child`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(child),
        }).then((response) => response.json());
        return res;
    },
    getChildrenByAccountId(user_id) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/child/${user_id}`,
        {
            method: 'GET',
        }).then((response) => response.json());
        return res;
    },
}
