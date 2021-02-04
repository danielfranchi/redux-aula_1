import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
    interface Store {
        carrinho: number
      }

    const total = useSelector((state: Store) => state.carrinho)

    return (
        <p>{total}</p>
    )
}

export default Total
