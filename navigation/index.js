import AuthNavigator from './AuthNavigation'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './TabNavigator'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const MainNavigation = () => {

  const userId = useSelector(state => state.auth.userId);
  
  return (
    <NavigationContainer>
      { userId ? 
        <TabNavigator />
        : 
        <AuthNavigator />
      }
    </NavigationContainer>
  )
}

export default MainNavigation