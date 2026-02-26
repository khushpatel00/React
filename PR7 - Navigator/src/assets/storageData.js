import { useNavigate } from "react-router";
import addProduct from "./Components/AddProduct.jsx";

export const fetchData = () => {
    let data = localStorage.getItem('zepto_products') || '[]'
    return JSON.parse(data);
}
export const pushData = (data) => {
    try {
        let tempdata = fetchData();
        tempdata.push(data)
        let product = tempdata;
        console.log(product)
        if (data) localStorage.setItem('zepto_products', JSON.stringify(product));
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
export const deleteKey = (i, setProduct) => {
    let data = fetchData();
    data.splice(i, 1);
    // console.log(data)
    localStorage.setItem('zepto_products', JSON.stringify(data));
    setProduct(fetchData());
}