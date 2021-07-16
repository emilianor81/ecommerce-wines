import axios from 'axios';
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS'
export const GETNAMES = 'GETNAMES'
export const ORDERPRODUCT = 'ORDERPRODUCT'
//ACTIONS DE SHOPPING-CART
export const ADD_TO_CART = 'ADD_TO_CART'
// export const ADD_ONE_FROM_CART = 'ADD_ONE_FROM_CART'
// export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CARRITO = 'CARRITO'


// export const GETNAMESQ = 'GETNAMESQ'

// Perdon EMI NO ME DI CUENTA JAJA
// LISTO tranqui
// no hay drama

export function carritoEstado (){
    return {
        type: CARRITO,
        };
  
}
export function removeProductCart (id){
    return {
        type: REMOVE_ALL_FROM_CART,
        payload: id,
        };
  
}
//ESTADO QUE SE LLAME productCart :[{},{},{}] =[]
export function addProductCart(payload) {
    return {
        type: ADD_TO_CART,
        payload,

        };
         //
  }

  export function ClearCart() { //ver que le pasamos al reducer
    return {
         type: CLEAR_CART, 
        //  payload 
        };
  }



export function getProducts () {
    return (dispatch) => {
        axios.get('http://localhost:3001/productos/all')
        .then(response => {
            dispatch({ type: GETCARDS, payload: response.data.filter(el => el.id)})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function getDetail (id) {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos/id/' + id)
        .then(response => {
            dispatch({ type: GETDETAILS, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function orderProduct ({offset, type, order, name}) {
    return (dispatch) => {
        const datos = `offset=${offset}&${type}=type&${order}=order&${name}=name`
        axios.get('http://localhost:3001/admin/productos/order?' + datos )
        .then(response => {
            dispatch({ type: ORDERPRODUCT, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

// export function getNamesQuery(name){
//     return (dispatch) => {
//         axios.get('http://localhost:3001/productos/?name='+ name)
//         .then(response => {
//             dispatch({ type: GETNAMESQ, payload: response.data})
//         })
//         .catch((err) =>{
//             console.log(err)
//         })
//     }
// }
export function getNames(){
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos/names')
        .then(response => {
            dispatch({ type: GETNAMES, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}





// axios.defaults.baseURL ="http://localhost:3001";