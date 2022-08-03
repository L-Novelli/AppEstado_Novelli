import { filteredBread, selectBread } from '../store/actions/bread.actions'
import { useDispatch, useSelector } from 'react-redux' //redux

import BreadItem from '../components/BreadItem'
import { FlatList } from 'react-native'
import React from 'react'

export const CategoryBreadScreen = ({navigation, route}) => {
    
    const dispatch = useDispatch()
    const categoryBreads = useSelector(store => store.breads.filteredBread)
    const category = useSelector(store => store.categories.selected )

    useEffect(() => {
        dispatch(filteredBread(category.id))
    },[])

    const handleSelected = (item) => {
        dispatch(selectBread(item.id))
        navigation.navigate('Detail', {
            bread: item.name
        })
    }

    const renderItemBread = ({ item }) => (
        <BreadItem item={item} onSelected={handleSelected} />
    )

    return (
        <FlatList
            data={categoryBreads}
            renderItem={renderItemBread}
            keyExtractor={item => item.id}
        />
    )
}

