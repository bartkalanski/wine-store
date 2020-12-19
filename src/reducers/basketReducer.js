import imageOne from '../imgs/porta6.jpg'
import imageTwo from '../imgs/CNDP.png'
import imageThree from '../imgs/riesling.jpg'
import imageFour from '../imgs/rioja.jpg'

const initState = {
    items:[
        {id:1, title: 'Châteauneuf du Pape', type: 'Red', origin: 'France', price: '£27.99', image: imageTwo},
        {id:2, title: 'Porta 6', type: 'Red', origin: 'Portugal', price: '£7.99', image: imageOne },
        {id:3, title: 'Rioja', type: 'Red', origin: 'Spain', price: '£14.99', image: imageFour },
        {id:4, title: 'Riesling', type: 'White', origin: 'Germany', price: '£9.99', image: imageThree },
    ],
    addedItems: [],
    total: 0
}

const basketReducer = (state = initState, action ) => {
    return state
}

export default basketReducer;