import {Link} from 'react-router';
import {fetchData, pushData, deleteKey} from '../storageData.js'
import {useState} from 'react';

const Home = ({className}) => {
    const [products, setProducts] = useState(fetchData());
    return (
        <div className={'flex flex-row flex-wrap gap-2 m-3 ' + className}>
            {products.map((product, i) => {
                return (
                    <div key={i} className={'bg-zinc-100 p-5 py-3 rounded-2xl'}>
                        <div className={'flex flex-row justify-between items-end'}>
                            <p className={'text-2xl wrap-anywhere text-zinc-950 capitalize'}>{product.name}</p>
                            <p className={'text-lg wrap-anywhere '}>Stock: {product.stock}</p>
                        </div>
                        <img src={product.imagePath} className={'text-sm text-zinc-400 max-h-[40vh] w-auto mx-auto rounded-2xl'}
                             alt={product.name}/>
                        <p className={'text-xl wrap-anywhere text-zinc-800'}>{product.description}</p>
                        <p className={'text-xl wrap-anywhere '}>Price: ₹{product.price}</p>
                        <Link to={'/edit-product/' + i} className='text-xl text-amber-400 pe-3'>Edit</Link>
                        <button className='cursor-pointer text-xl text-red-500' onClick={() => deleteKey(i, setProducts)}>Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
export default Home;