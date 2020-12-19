const initState = {
    items:[
        {id:1, title: 'Seguret', type: 'Red', origin: 'France', price: '£14.99' },
        {id:2, title: 'Porta 6', type: 'Red', origin: 'Portugal', price: '£7.99' },
        {id:3, title: 'Muga', type: 'Red', origin: 'Spain', price: '£23.99' },
        {id:4, title: 'Hans Greyl', type: 'White', origin: 'New Zealand', price: '£9.99' },
    ],
    addedItems: [],
    total: 0
}

const basketReducer = (state = initState, action ) => {
    return state
}

export default basketReducer;