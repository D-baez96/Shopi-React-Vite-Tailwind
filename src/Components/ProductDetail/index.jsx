import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)

    return(
        <aside className= {`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => context.closeProductDetail()}
                    ></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.productShow.images[0]} alt={context.productShow.title} />
            </figure>
            <p className='flex flex-col p-6 '>
                <span className='font-medium text-2xl mb-2'>${context.productShow.price}</span>
                <span className='font-medium text-md'>{context.productShow.title}</span>
                <span className='font-light text-sm'>{context.productShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;