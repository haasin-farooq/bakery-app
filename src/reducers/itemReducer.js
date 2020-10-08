const INITIAL_STATE = {
    items: [
        {
            id: '1',
            title: 'Item 1',
            price: 10
        },
        {
            id: '2',
            title: 'Item 2',
            price: 20
        },
        {
            id: '3',
            title: 'Item 3',
            price: 30
        }
    ]
}

const itemReducer = (state = INITIAL_STATE, action) => {
    return state;
}

export default itemReducer;