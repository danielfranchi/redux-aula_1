import React from 'react'

import Adicionar from './Adicionar/Adicionar'
import Total from './Total/Total'
import Remover from './Remover/Remover'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

interface Store {
  carrinho: number
}

const initialState: Store = {
  carrinho: 0
}

function reducer(state = initialState , action: any){
  switch(action.type){
    case 'ADICIONAR_CARRINHO':
      return{
        carrinho: state.carrinho + 1
      }

    case 'DIMINUIR_CARRINHO':
      return{
        carrinho: state.carrinho - 1
      }

      default:
        return state
  }
}

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>

      <h1>iphone 12 Pro Max</h1>
      <Adicionar />
      <Total />
      <Remover />
    </Provider>
  )
}

export default App