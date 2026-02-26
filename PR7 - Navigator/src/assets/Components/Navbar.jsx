import {Link} from "react-router";

function Navbar() {
    return (
        <nav className="sticky w-full z-20 top-0 start-0 border-b border-default bg-white">
            <div className="max-w-7xl flex flex-wrap items-center mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                    <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/14.18.2/images/header/primary-logo.svg" className="h-7" alt="Flowbite Logo" />
                </a>
                <div className="flex items-center order-1 grow">
                    <div className="relative block w-full px-8 ps-12">
                        <input type="text" id="input-group-1" className="block w-full ps-9 pe-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body rounded-full border-zinc-400" placeholder="Search" />
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
    )
}

export default Navbar