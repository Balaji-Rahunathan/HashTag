import {createStore,} from 'redux'
import rootReducer from '../Reducers/rootReducer'
import {AsyncStorage} from "react-native"

// async function saveToLocalStorage(state) {
//     try {
//       const serializedState = JSON.stringify(state)
//       await AsyncStorage.setItem('state', serializedState)
//       console.log(state)
//     } catch(e) {
//       console.log(e)
//     }
//   }
//  async function  loadFromLocalStorage() {
//     try {
//        const serializedState = await AsyncStorage.getItem('state')
//       if (serializedState === null) return undefined
//       console.log(serializedState)
//       return JSON.parse(serializedState)
//     } catch(e) {
//       console.log(e)
//       return undefined
//     }
//   }
//   const persistedState = loadFromLocalStorage()
  
// const store = createStore(rootReducer,persistedState);
// store.subscribe(() => saveToLocalStorage(store.getState()))
// export default store
export default createStore(rootReducer)