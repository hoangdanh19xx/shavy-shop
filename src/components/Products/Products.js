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
import Input from 'components/Input/Input'
import searchVietnamese from 'utilities/searchVietnamese'

function Products() {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts)
  const toggleProductInfo = useSelector(toggleOpenProduct)
  const searchTerm = useSelector(state => state.products.searchItem)

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)
  const [currentProducts, setCurrentProducts] = useState([])
  const [isOpenInput, setIsOpenInput] = useState(false)

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
    <section className='products' id="products">
      <div className='container products__container'>
        <div className='products__categories'>
          <h2 className="products__title">FEATURED PRODUCTS</h2>
          <div className='products__search'>
            <a href='#product' onClick={() => setIsOpenInput(!isOpenInput)}>
              Search<i className='fa-solid fa-magnifying-glass'></i>
            </a>
          </div>
        </div>
        {isOpenInput && <Input isOpenInput={isOpenInput} setIsOpenInput={setIsOpenInput} />}
        <div className='products__products'>
          <ul className='product-list'>
            {loading ? (
              <div>Loading...!!!</div>
            ) : (
              currentProducts &&
              currentProducts.map((product) => {
                return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  searchVietnamese(product.name.toLowerCase()).includes(searchTerm.toLowerCase())
                  ? (
                    <ProductItem
                      key={product.id}
                      product={product}
                    />
                  )
                  :
                  null
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
