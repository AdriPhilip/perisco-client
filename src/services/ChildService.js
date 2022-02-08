export default {
    async createChild(child) {
        console.log("create child")
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/add_child`,
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
    deleteChild(child_id) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/del_child/${child_id}`,
        {
            method: 'DELETE',
        }).then((response) => response.json());
        return res;
    }
}
