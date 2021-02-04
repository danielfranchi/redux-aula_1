import React from 'react'
import { useDispatch } from 'react-redux'


const Adicionar = () => {

    const dispatch = useDispatch()

    const calcula = () => {
        dispatch({type: 'ADICIONAR_CARRINHO'})

    }

    return (
        <button onClick={calcula}>+</button>
    )
}

export default Adicionar
