import { Link } from 'react-router';
import { fetchData, pushData, deleteKey } from '../storageData.js'
import { useState } from 'react';

const Home = ({ className }) => {
    const [product, setProduct] = useState(fetchData());
    return (
        <div className={'flex flex-row flex-wrap gap-2 m-3 ' + className}>
            {product.map((product, i) => {
                return (
                    <div key={i} className={'bg-zinc-100 p-5 py-3 rounded-2xl'}>
                        <p className={'text-2xl wrap-anywhere text-zinc-950'}>{product.name}</p>
                        <img src={product.imagePath} className={'text-sm text-zinc-400 max-h-[40vh] w-auto rounded-2xl'} alt={product.name} />
                        <p className={'text-xl wrap-anywhere text-zinc-800'}>Description: {product.description}</p>
                        <p className={'text-xl wrap-anywhere '}>Price: ₹{product.price}</p>
                        <Link className='text-xl text-amber-400 pe-3'>Edit</Link>
                        <button className='text-xl text-red-500' onClick={() => deleteKey(i, setProduct)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Home;