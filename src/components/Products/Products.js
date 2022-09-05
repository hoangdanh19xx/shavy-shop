import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Products.scss'
import ProductItem from './ProductItem/ProductItem'
import ProductInfo from 'components/Products/ProductInfo/ProductInfo'
import {
  getListProducts,
  getAllProducts,
  toggleOpenProduct,
  getListCategories,
  getCategories
} from 'redux/productSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from 'components/Pagination/Pagination'
import Input from 'components/Input/Input'
import searchVietnamese from 'utilities/searchVietnamese'

function Products() {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts)
  const categories = useSelector(getCategories)
  const toggleProductInfo = useSelector(toggleOpenProduct)
  const searchTerm = useSelector(state => state.products.searchItem)

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(12)
  const [currentProducts, setCurrentProducts] = useState([])
  const [isOpenInput, setIsOpenInput] = useState(false)
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [items, setItems] = useState([])
  const [categoriesItem, setCategoriesItem] = useState([])

  useEffect(() => {
    dispatch(getListProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getListCategories())
  }, [dispatch])

  useEffect(() => {
    if (width < 450) setProductsPerPage(8)
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products?.data?.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    )
    setCurrentProducts(currentProducts)
  }, [currentPage, products, productsPerPage, width])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    const searchProduct = (search) => {
      let filterItem = products?.data?.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) ||
        searchVietnamese(product.name.toLowerCase()).includes(search.toLowerCase()))
      setItems(filterItem)
    }
    searchProduct(searchTerm)
  }, [products?.data, searchTerm])

  const renderProducts = searchTerm !== '' ? items : categoriesItem.length > 0 ? categoriesItem : currentProducts

  useEffect(() => {
    const getValueScreenWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', getValueScreenWidth)

    return () => window.removeEventListener('resize', getValueScreenWidth)
  }, [])

  const handleGetProductToCategory = (categoryName) => {
    let name = categories.data.find(item => item.name === categoryName)
    const data = []
    products.data.filter(item => (item.category?.[0].id === name.category.id) ? data.push(item) : data)
    setCategoriesItem(data)
    setOpen(false)
  }

  return (
    <section className='products' id="products">
      <div className='container products__container'>
        <div className='products__categories'>
          {width > 768 ? (<ul className="products__select">
            <li className="products__select-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setCategoriesItem(products)}>All</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Bags")}>
              <NavLink to="/bags" className={({ isActive }) => (isActive ? 'active' : '')}>Bags &#38; Backpacks</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Decoration")}>
              <NavLink to="/decoration" className={({ isActive }) => (isActive ? 'active' : '')}> Decoration</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Essential")}>
              <NavLink to="/essential" className={({ isActive }) => (isActive ? 'active' : '')}>Essential</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Interior")}>
              <NavLink to="/interior" className={({ isActive }) => (isActive ? 'active' : '')}>Interior</NavLink>
            </li>
          </ul>) : (<h3 onClick={() => setOpen(!open)}>Categories</h3>)}

          <div className='products__search'>
            <a href='#product' onClick={() => setIsOpenInput(!isOpenInput)}>
              Search<i className='fa-solid fa-magnifying-glass'></i>
            </a>
          </div>
        </div >
        <div className="mobile">
          <ul className={`products__select ${open ? 'open' : ''}`}>
            <li className="products__select-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setCategoriesItem(products)}>All</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Bags")}>
              <NavLink to="/bags" className={({ isActive }) => (isActive ? 'active' : '')}>Bags &#38; Backpacks</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Decoration")}>
              <NavLink to="/decoration" className={({ isActive }) => (isActive ? 'active' : '')}> Decoration</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Essential")}>
              <NavLink to="/essential" className={({ isActive }) => (isActive ? 'active' : '')}>Essential</NavLink>
            </li>
            <li className="products__select-item" onClick={() => handleGetProductToCategory("Interior")}>
              <NavLink to="/interior" className={({ isActive }) => (isActive ? 'active' : '')}>Interior</NavLink>
            </li>
          </ul>
        </div>

        {isOpenInput && <Input isOpenInput={isOpenInput} setIsOpenInput={setIsOpenInput} />
        }
        <div className='products__products'>
          <ul className='product-list'>
            {renderProducts ?
              renderProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                />
              )) : (categoriesItem?.length === 0 &&
                <div className='not-product'>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <h2>No products!!</h2>
                </div>
              )
            }

            {items?.length === 0 && (
              <div className='not-found'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <h2>No products found</h2>
              </div>
            )}

            {toggleProductInfo && (
              <ProductInfo />
            )}
          </ul>

          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={categoriesItem.length > 0 ? categoriesItem.length : products?.data?.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div >
    </section >
  )
}

export default Products
