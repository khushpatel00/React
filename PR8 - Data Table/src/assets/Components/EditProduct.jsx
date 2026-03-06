import { fetchData, pushData, updateWhole } from "../storageData.js";
import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";

const EditProduct = () => {
    const { i } = useParams()
    let oldProduct = fetchData()[i];
    let navigator = useNavigate()
    const [formData, setFormData] = useState({
        name: oldProduct?.name || "",
        description: oldProduct?.description || "",
        price: oldProduct?.price || "",
        stock: oldProduct?.stock || "",
        imagePath: oldProduct?.imagePath || ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const editProduct = (e) => {
        e.preventDefault();
        let data = fetchData();
        data[i] = formData
        console.log(data)
        updateWhole(data)
        navigator('/');
    }


    return (
        <>
            <nav className="sticky w-full z-20 top-0 start-0 border-b border-default bg-white">
                <div className="max-w-7xl flex flex-wrap items-center mx-auto p-4">
                    <a href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/14.18.2/images/header/primary-logo.svg" className="h-7" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center order-1 grow">
                        <div className="relative block w-full px-8 ps-12">
                            <input type="text"
                                id="input-group-1"
                                className="block w-full ps-9 pe-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body rounded-full border-zinc-400"
                                placeholder="Search" />
                        </div>
                    </div>
                    <div className="items-center justify-between flex w-auto order-1" id="navbar-search">
                        <ul className="font-medium border-default rounded-base bg-neutral-secondary-soft flex flex-row flex-wrap  space-x-8 rtl:space-x-reverse border-0 bg-neutral-primary">
                            <li>
                                <Link to={'/'} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary">Home</Link>
                            </li>
                            <li>
                                <Link to={'/add-product'} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary">Add Product</Link>
                            </li>
                            {/* <li>
                                <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary"></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="p-10">
                <form
                    onSubmit={editProduct}
                    className="flex flex-col gap-3 lg:max-w-1/2 lg:mx-auto"
                >

                    <div className="flex justify-between">
                        <label className="text-3xl">Product Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded-lg px-5 py-3 text-2xl"
                        />
                    </div>

                    <div className="flex justify-between">
                        <label className="text-3xl">Product Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded-lg px-5 py-3 text-2xl"
                        />
                    </div>

                    <div className="flex justify-between">
                        <label className="text-3xl">Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded-lg px-5 py-3 text-2xl"
                        />
                    </div>

                    <div className="flex justify-between">
                        <label className="text-3xl">Stock:</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded-lg px-5 py-3 text-2xl"
                        />
                    </div>

                    <div className="flex justify-between">
                        <label className="text-3xl">Image Path:</label>
                        <input
                            type="text"
                            name="imagePath"
                            value={formData.imagePath}
                            onChange={handleChange}
                            className="bg-zinc-200 rounded-lg px-5 py-3 text-2xl"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Edit Product"
                        className="bg-zinc-200 rounded-lg px-4 py-3 cursor-pointer"
                    />
                </form>
            </div>
        </>
    )
}
export default EditProduct