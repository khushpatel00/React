import {fetchData, pushData, updateWhole} from "../storageData.js";
import {useNavigate, useParams} from "react-router";
import {useState} from "react";

const EditProduct = () => {
    const {i} = useParams()
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
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const editProduct = (e) => {
        e.preventDefault();
        let data = fetchData();
        data[i] =  formData
        console.log(data)
        updateWhole(data)
        navigator('/');
    }


    return (
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
    )
}
export default EditProduct