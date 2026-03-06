import { Link } from 'react-router';
import { fetchData, pushData, deleteKey } from '../storageData.js'
import { useState, useEffect } from 'react';

const Home = () => {
    const [allProducts, setAllProducts] = useState(fetchData());
    const [products, setProducts] = useState(allProducts);

    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        let filtered = allProducts.filter((item) => {
            const term = search.toLowerCase();
            return (
                item.name.toLowerCase().includes(term) ||
                (item.description && item.description.toLowerCase().includes(term)) ||
                item.price.toString().includes(term)
            );
        });

        filtered.sort((a, b) => {
            if (sortOrder === 'asc') return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });

        setProducts(filtered);
    }, [allProducts, search, sortOrder]);


    return (
        <>
            <nav className="sticky w-full z-20 top-0 start-0 border-b border-default bg-white">
                <div className="max-w-7xl flex flex-wrap items-center mx-auto p-4">
                    <a href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/14.18.2/images/header/primary-logo.svg" className="h-7" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center justify-between order-1 grow">
                        <div className="relative flex w-full px-8 ps-12">
                            <input type="text"
                                id="input-group-1"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className=" basis-11/12  ps-9 pe-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body rounded-full border-zinc-400"
                                placeholder="Search" />

                            <div className="flex items-center ps-5">
                                <button
                                    onClick={() => setSortOrder('asc')}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    &#9650;
                                </button>
                                <button
                                    onClick={() => setSortOrder('desc')}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    &#9660;
                                </button>
                            </div>
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
            <div className="m-3 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {i + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                                    {product.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {product.imagePath && (
                                        <img
                                            src={product.imagePath}
                                            alt={product.name}
                                            className="h-10 w-10 object-cover rounded"
                                        />
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ₹{product.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {product.stock}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link to={'/edit-product/' + i} className="text-amber-400 hover:underline">
                                        Edit
                                    </Link>
                                    <button
                                        className="ml-4 text-red-500 hover:underline"
                                        onClick={() => deleteKey(i, setAllProducts)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Home;