import { IProduct } from "./Ip";
import instance from "./instance";

const Getallproduct = () => {
    return instance.get('/products');
}
const Addproduct = (product: IProduct) => {
    return instance.post('/products', product);
}
const Deleteproduct = (id: number) => {
    return instance.delete('/products/' + id);
}
const Updateproduct = (product: IProduct) => {
    return instance.put('/products/' + product.id, product);
}
const Getalluser = () => {
    return instance.get('/user');
}
const Adduser = (user: IProduct) => {
    return instance.post('/user', user);
}
const Getallcategory = () => {
    return instance.get('/category');
}

export { Getallproduct, Updateproduct, Deleteproduct, Addproduct, Getalluser, Adduser, Getallcategory }