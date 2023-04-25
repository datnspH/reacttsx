import { useParams } from "react-router-dom"
import React from "react"

const Productdetail = (props: any) => {
    const { id } = useParams()
    // console.log(useParams); 

    const curentproduct = props.products.find((item: any) => item.id == id)
    console.log(curentproduct)

    return (
        <div key={id}>
            <h3>{curentproduct?.name}</h3>
            <p>{curentproduct?.categoryId}</p>
            <p>{curentproduct?.price}</p>
            <p>{curentproduct?.description}</p>
            <img src={curentproduct?.image} alt="" />
        </div>
    )
}
export default Productdetail