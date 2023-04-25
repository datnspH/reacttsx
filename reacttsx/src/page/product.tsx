import { useEffect, useState } from "react"
import { IProduct } from "../api/Ip"
import { Link } from "react-router-dom"
import { Input, Space } from 'antd';
interface IProps {
    products: IProduct[]
}
const Product = (props: IProps) => {
    const [data, setdata] = useState<IProduct[]>([])
    const [category, setcategory] = useState([])
    useEffect(() => {
        setdata(props.products)
    }, [props])
    const { Search } = Input;
    const onSearch = (value: string) => {
      setdata(props.products.filter((item) => item.name.startsWith(value) || item.description == value))
    };
    return (
        <div style={{ margin: '0 auto', width: '1280px' }}>
            <div style={{ marginLeft: '50px', }}>
                <a href="/login">  <button style={{ backgroundColor: 'blue', borderRadius: '25px' }}>Login</button></a>
                <a href="/register">   <button style={{ backgroundColor: 'blue', borderRadius: '25px' }}>Register</button></a>
            </div>
            <Search
                style={{ margin: '0 auto', width: '380px' }}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            <div >
                {data.map((item) => {
                    return <div key={item.id}>
                        <h1> <Link to={'/' + item.id}> {item.name}</Link></h1>
                        <p>{item.categoryId}</p>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                        <img src={item.image} alt="" />
                    </div>
                })}
            </div>


        </div>
    )
}
export default Product