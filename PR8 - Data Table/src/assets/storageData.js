import {useNavigate} from "react-router";
import addProduct from "./Components/AddProduct.jsx";

export const fetchData = () => {
    let data = localStorage.getItem('zepto_products') || '[{"name":"smoodh","description":"Amul Smoodh, kesar badam","price":"20","stock":"20","imagePath":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOWRiG1zHnztqJISGjO7fXV_JJlEW_2ZAeA39xpqBerEsyXYQa1TDJdy2F2xbv0GDxOnu8M1jr0nFlLq_5VlZ2exGn12Gp5FdteXoFVrZTMGaa0bIxQ7GaRQ"},{"name":"MAGGI ","description":"MAGGI 2-Minute Instant Noodles | Masala Noodles ","price":"50","imagePath":"https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/5dc3d814-18af-4d72-b2de-651e2058311c.jpeg","stock":"20"},{"name":"Lay\'s Potato Chips ","description":"Lay\'s Potato Chips | Chile Lemon Flavour","price":"20","imagePath":"https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/4a9f2e12-07de-4072-8550-2b26900de3e6.jpeg","stock":"20"}]'
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
        console.error(e);
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

export const updateWhole = (data) => {
    try {

        if (data) localStorage.setItem('zepto_products', JSON.stringify(data));
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}