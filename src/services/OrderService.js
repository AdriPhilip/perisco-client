export default {
    createOrder(order){
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/add_order`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        }).then((response) => response.json());
        return res;
    },
    getOrdersByChildId(child_id) {
        const res = fetch(`${process.env.VUE_APP_PERISCO_API}/orders/${child_id}`,
        {
            method: 'GET',
        }).then((response) => response.json());
        return res;
    },
}