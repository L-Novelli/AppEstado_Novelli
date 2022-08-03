import {combineReducers, createStore} from 'redux'

import BreadReducer from './reducers/bread.reducers'
import CategoryReducer from './reducers/category.reducers'

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    breads: BreadReducer
})

export default createStore(RootReducer)
