import {ChevronRightIcon} from '@heroicons/react/24/solid'

const OrdersCard = props =>{
    const { totalPrice, totalProducts } = props

    return(
        <div className="flex justify-between p-4  rounded-lg items-center mb-6 border border-black w-80">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                <span className='font-light'>03.07.2023</span>
                <span className='font-light'>{totalProducts} Articles</span>
                </p>
                <p className='flex gap-2 items-center'>
                <span className='font-medium text-xl'>${totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
                </p>


            </div>
        </div>
    )
}
export default OrdersCard;