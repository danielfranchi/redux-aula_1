import React from 'react'
import { useDispatch } from 'react-redux'


const Remover = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch({type: 'DIMINUIR_CARRINHO'})}>-</button>
    )
}

export default Remover
