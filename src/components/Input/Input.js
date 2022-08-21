import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSearchItem } from 'redux/productSlice/productSlice'
import "./Input.scss"

function Input({ isOpenInput, setIsOpenInput }) {
    const dispatch = useDispatch()
    const searchTerm = useSelector(state => state.products.searchItem)

    return (
        <div className="form">
            <input
                className='form__input'
                type="text"
                name="search"
                id="search"
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => dispatch(handleSearchItem(e.target.value))}
            />
            <i className="fa-solid fa-xmark form__icon" onClick={() => setIsOpenInput(!isOpenInput)}></i>
        </div>
    )
}

export default Input