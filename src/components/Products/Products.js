import React, { useEffect, useState } from 'react'
import './Products.scss'
import ProductItem from './ProductItem/ProductItem'
import ProductInfo from 'components/Products/ProductInfo/ProductInfo'
import {
  getListProducts,
  getAllProducts,
  toggleOpenProduct
} from 'redux/productSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from 'components/Pagination/Pagination'

function Products() {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts)
  const toggleProductInfo = useSelector(toggleOpenProduct)

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(4)
  const [currentProducts, setCurrentProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    dispatch(getListProducts())
    setLoading(false)
  }, [dispatch])

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products?.data?.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    )
    setCurrentProducts(currentProducts)
  }, [currentPage, products, productsPerPage])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className='shop'>
      <div className='container shop__container'>
        <div className='shop__categories'>
          <ul className='menu'>
            <li className='menu-item'>
              <a href='!#' className='active'>
                All
              </a>
            </li>
            <li className='menu-item'>
              <a href='!#'>Bags & Backpacks</a>
            </li>
            <li className='menu-item'>
              <a href='!#'>Decoration</a>
            </li>
            <li className='menu-item'>
              <a href='!#'>Essential</a>
            </li>
            <li className='menu-item'>
              <a href='!#'>Interior</a>
            </li>
          </ul>
          <div className='shop__filter'>
            <a href='!#'>Filter</a>
            <a href='!#'>
              Search<i className='fa-solid fa-magnifying-glass'></i>
            </a>
          </div>
        </div>
        <div className='shop__products'>
          <ul className='product-list'>
            {loading ? (
              <div>Loading...!!!</div>
            ) : (
              currentProducts &&
              currentProducts.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    product={product}
                  />
                )
              })
            )}
            {toggleProductInfo && (
              <ProductInfo />
            )}
          </ul>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products?.data?.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  )
}

export default Products
