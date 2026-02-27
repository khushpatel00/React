import {pushData} from "../storageData.js";
import {useNavigate} from "react-router";

const AddProduct = () => {
    let navigator = useNavigate()
    const addProduct = (e) => {
        e.preventDefault()
        console.log(e.target.name.value, e.target.description.value, e.target.price.value, e.target.imagePath.value);
        let data = {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            imagePath: e.target.imagePath.value,
            stock: e.target.stock.value,
        }
        let response = pushData(data)
        if(response === true) navigator('/');
        else return;
    }
    return (
        <div className={'p-10'}>
            <form onSubmit={addProduct} action="" className={'flex flex-wrap flex-col gap-3 justify-between lg:max-w-1/2 lg:mx-auto'}>
                <div className={'flex flex-row justify-between '}>
                    <label htmlFor={'name'} className={'text-3xl'}>Product Name: </label>
                    <input type="text" name={'name'} id={'name'}
                           className={'bg-zinc-200 rounded-lg px-5 py-3 text-2xl'}/>
                </div>
                <div className={'flex flex-row justify-between '}>
                    <label htmlFor={'description'} className={'text-3xl'}>Product Description: </label>
                    <input type="text" name={'description'} id={'description'}
                           className={'bg-zinc-200 rounded-lg px-5 py-3 text-2xl'}/>
                </div>
                <div className={'flex flex-row justify-between '}>
                    <label htmlFor={'price'} className={'text-3xl'}>Price: </label>
                    <input type="number" name={'price'} id={'price'}
                           className={'bg-zinc-200 rounded-lg px-5 py-3 text-2xl'}/>
                </div>
                <div className={'flex flex-row justify-between '}>
                    <label htmlFor={'stock'} className={'text-3xl'}>Stock: </label>
                    <input type="number" name={'stock'} id={'stock'}
                           className={'bg-zinc-200 rounded-lg px-5 py-3 text-2xl'}/>
                </div>
                <div className={'flex flex-row justify-between '}>
                    <label htmlFor={'imagePath'} className={'text-3xl'}>Image Path: </label>
                    <input type="text" name={'imagePath'} id={'imagePath'}
                           className={'bg-zinc-200 rounded-lg px-5 py-3 text-2xl'}/>
                </div>
                <input type="submit" value="Add Product" className={'bg-zinc-200 rounded-lg px-4 py-3 cursor-pointer'} />
            </form>
        </div>
    )
}
export default AddProduct;