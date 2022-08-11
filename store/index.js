import {applyMiddleware, combineReducers, createStore} from 'redux'

import BreadReducer from './reducers/bread.reducers'
import CartReducer from './reducers/cart.reducer'
import CategoryReducer from './reducers/category.reducers'
import thunk from 'redux-thunk'

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))
