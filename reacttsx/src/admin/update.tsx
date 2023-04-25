import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { IProduct } from "../api/Ip";
interface IProps {
    products: IProduct[],
    onUpdate: (id: number) => void
}
const Update = (props: IProps) => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams()
    useEffect(() => {
        const currenproduct = props.products.find(item => item.id === Number(id))
            reset(currenproduct)
    }, [props])
    const onHandleSubmit = (data) => {
        props.OnUpdate(data)
        navigate('/admin')

    }
    return (<div style={{ border: "5px" }}>
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            <input type="text" {...register("name")} placeholder="Name" /> <br />
            <input type="number" {...register("price")} placeholder="price" /><br />
            <input type="text" {...register("description")} placeholder="description" /><br />
            <input type="number" {...register("categoryId")} placeholder="categoryId" /><br />
            <button type="submit">Update</button>
        </form>
    </div>
    )
}
export default Update