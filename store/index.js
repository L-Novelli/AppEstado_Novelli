import { applyMiddleware, combineReducers, createStore } from 'redux'

import AuthReducer from './reducers/auth.redicer';
import BreadReducer from './reducers/bread.reducers';
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from  './reducers/category.reducers'
import OrderReducer from './reducers/order.reducer';
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    order: OrderReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))