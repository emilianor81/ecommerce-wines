import {
  GETCARDS,
  GETDETAILS,
  GETNAMES,
  ORDERPRODUCT,
  GET_USER_DETAILS,
  GETALLPEDIDOS,
  GETPEDIDODETAIL,
  DELETE_LOCAL_STORAGE,
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GETPEDIDOSBYSTATE,
  PUTPEDIDO,
  ADD_LOCAL_STORAGE,
  CARRITO,
  GET_LOCAL_STORAGE,
  GET_ALL_USERS,
  PEDIDOSUSER,
  POST_USER,
  UPDATE_FROM_CART
} from '../actions'
// import CartItem from '../components/shoppingCart/CartItem';


const initialState = {
  products: [],
  productDetail: {},
  names: [],
  orderProd: [],
  pedidos: [],
  pedidoDetail: {},
  AllClients: [],
  ClientDetails: {},
  pedidosUser: [],
  productCart: [],
  arrayStorages: [],
  user:{},
}


const rootReducer = (state = initialState, action) => {
  // let updatedCart;
  // let updatedItemIndex;
  // const array = JSON.parse(window.localStorage.getItem("array"));
  // window.localStorage.setItem( "array", JSON.stringify( array.length? array=state.productCart :  console.log('falla en local storage') ) );//state.productCart.concat([nuevoItem])
  // console.log(JSON.parse(window.localStorage.getItem("array")))
  switch (action.type) {
    case CARRITO:
      return {
        ...state,
        carritoState: !state.carritoState
      };

    case GETCARDS:
      return {
        ...state,
        products: action.payload
      };
    case GETNAMES:
      return {
        ...state,
        names: action.payload
      };
    case ORDERPRODUCT:
      return {
        ...state,
        orderProd: action.payload
      };

    case GETDETAILS:
      return {
        ...state,
        productDetail: action.payload
      };

    case PUTPEDIDO:
      return {};
      //ADMIN DASHBOARD

    case GET_ALL_USERS:
      return {
        ...state,
        AllClients: action.payload,
      };
      
      case POST_USER:
        window.localStorage.setItem('user',JSON.stringify(action.payload))
       return {
         ...state,
         user: action.payload
       } 

    case GET_USER_DETAILS:
      return {
        ...state,
        ClientDetails: action.payload,
      };

    case GETALLPEDIDOS:
      return {
        ...state,
        pedidos: action.payload,
      };

    case GETPEDIDOSBYSTATE:
      return {
        ...state,
        pedidos: action.payload,
      };

    case GETPEDIDODETAIL:
      return {
        ...state,
        pedidoDetail: action.payload,
      };
    case PEDIDOSUSER:
      return {
        ...state,
        pedidosUser: action.payload
      };
//ACTION PARA AGREGAR PRODUCTOS AL CARRITO, CUANDO DAMOS CLICK EN AGREGAR SOBRE EL PRODUCTO
//logica agregar funciona perfect!
    case ADD_TO_CART:
      let nuevoItem = state.products.find(prod => ((prod.id === action.payload)||prod.id===action.payload.id||console.log('marquitos', prod.id)))
      let a = state.productCart.length ? state.productCart.filter(e => (e!== undefined&& nuevoItem!==undefined)? e.id === (nuevoItem.id):null) : ''
      if (a.length) {
            nuevoItem = {
              ...nuevoItem,
              cantidad: (parseInt(a[0].cantidad) + 1)
            }
            state = {
              ...state,
              productCart: state.productCart.filter(e => e.id !== nuevoItem.id)
            }
      }

      if (!a.length) {
        nuevoItem = {
          ...nuevoItem,
          cantidad: 1
        }
      }
      let array = JSON.parse(window.localStorage.getItem("array"));
      window.localStorage.setItem("array", JSON.stringify(array = state.productCart.concat(nuevoItem)))
      // window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.concat([nuevoItem]) : array=[nuevoItem])); //state.productCart.concat([nuevoItem])
      // window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.filter(e => e.id !== nuevoItem.id)&& array.concat([nuevoItem]) : array=[nuevoItem])); //state.productCart.concat([nuevoItem])
      return {
        ...state,
        productCart: state.productCart.concat(nuevoItem)
      };

      //ACTUALIZAR CANTIDAD DEL CARRITO EN UN PROD EN PARTICULAR 
      case UPDATE_FROM_CART:
        console.log(action.payload)
        state = {
          ...state,
          productCart: state.productCart
        }
        return{
          ...state,
          productCart: state.productCart.map(e => e.id === action.payload.id? e = {...e, cantidad :(parseInt(action.payload.cantidad))} :e)
        } 
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        productCart: state.productCart.filter(e => e.id !== action.payload)
      }

      /*    case 'RemoveTodo': return state.filter(t => t.id != action.payload)*/ // despues necesito unos cerebritos por aca arriba|^|
      case CLEAR_CART:
        return {
          ...state,
          productCart: []
        };
      // case GET_LOCAL_STORAGE: {
      //   const array = JSON.parse(window.localStorage.getItem("santi"));
      //   return {
      //     ...state,
      //     productCart: array ? state.productCart.slice().concat([array]) : state.productCart
      //   }
      // }
      
    case DELETE_LOCAL_STORAGE: {
      const array = JSON.parse(window.localStorage.getItem('array'));
      const arrayfiltrado = array && array.filter(element => element.id !== action.payload);
      window.localStorage.removeItem('array');
      window.localStorage.setItem('array', JSON.stringify(arrayfiltrado));
      return {
        ...state
      }
    }


    case GET_LOCAL_STORAGE: {
        const array = JSON.parse(window.localStorage.getItem("array"));

        return {
          ...state,
          user: JSON.parse(window.localStorage.getItem('user')),
          arrayStorages: array ? state.arrayStorages.slice().concat([array]) : state.arrayStorages
        }
      }

   

      case ADD_LOCAL_STORAGE:{
        const array = JSON.parse(window.localStorage.getItem("array"));

       window.localStorage.setItem( "array", JSON.stringify( array? array.concat([action.payload]) : state.arrayStorages.concat([action.payload]) ) );
        return {
          ...state,
          arrayStorages: state.arrayStorages.slice().concat([action.payload])
        }
      }

    default:
      return state;
  };
}

export default rootReducer