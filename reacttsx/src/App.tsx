import React , { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './page/product'
import Productdetail from './page/productdetail'
import { Adduser, Deleteproduct, Getallcategory, Getallproduct, Getalluser, Updateproduct } from './api/product';
import { IProduct } from './api/Ip';
import Loggin from './admin/loggin';
import AddProduct from './admin/add';
import Dasbord from './admin/dasbord';
import { Addproduct } from './api/product';
import Update from './admin/update';
import Register from './admin/register';
function App() {
  const [products, setproducts] = useState([])
  const [users, setuser] = useState([])
  const [category, setcategory] = useState([])
  useEffect(() => {
    Getallproduct().then(({ data }) => setproducts(data))
    Getalluser().then(({ data }) => setuser(data))
    Getallcategory().then(({ data }) => setcategory(data))
  }, [])
  const onadd = (product: IProduct) => {
    Addproduct(product).then(() => Getallproduct().then(({ data }) => setproducts(data))).then(() => alert("Add thành công"))
  }
  const onUpdate = (product: IProduct) => {
    Updateproduct(product).then(() => Getallproduct().then(({ data }) => setproducts(data))).then(() => alert("update thành công"))
  }
  const OnRemove = (id: number) => {
    Deleteproduct(id).then(() => setproducts(products.filter((item: IProduct) => item.id !== id))).then(() => alert("DELETE thành công"))

  }
  const onadduser = (user) => {
    Adduser(user).then(()=>alert("register thành công"))
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={< Product products={products} Category={category} />} />
            <Route path=':id' element={<Productdetail products={products} />} />
            <Route path='login' element={< Loggin user={users} />} />
            <Route path='register' element={< Register onadduser={onadduser} />} />
          </Route>
          <Route path='/admin'>
            <Route index element={< Dasbord products={products} onRemove={OnRemove} />} />
            <Route path='add' element={< AddProduct onAdd={onadd} />} />
            <Route path='update/:id' element={< Update OnUpdate={onUpdate} products={products} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
