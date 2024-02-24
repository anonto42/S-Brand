import React, { useContext, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout';
import Filter from '../../Components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import { toast } from 'react-toastify';
import myContext from '../../Context/MyContext';

const AllProducts = () => {
  const { mode ,product,filterPrice,filterType,searchkey } = useContext(myContext)

    const dispatch = useDispatch()

    const cardItems = useSelector(state => state.cart.cart)

    const addCart = (product) =>{
        dispatch(addToCart(product))
        toast.success("Cart added successfully")
    }
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cardItems)); 
    },[cardItems])


  return (
    <Layout>
      {/* This is an filter part */}
      <Filter/>
      {/* Cart section */}

      <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="flex flex-wrap -m-4 ml-2" id='allProductBox'>
            {product.filter(obj=>obj.title.toLowerCase().includes(searchkey)).filter(obj=>obj.category.toLowerCase().includes(filterType)).filter(obj=>obj.price.toLowerCase().includes(filterPrice)).slice(0,8).map((item,index)=>{
                const {title,
                    price,
                    imageUrl,
                    category,
                    description,
                    time} = item
                return (
                        <div onClick={()=> window.location.href = `/productinfo/${item.id}`} className="p-4 md:w-[33%] drop-shadow-lg " key={index} >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>{category}</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{price}$</p>
                                <div className=" flex justify-center">
                                    <button onClick={()=>addCart(item)} type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>
                )
            })}
    </div>
          </div>
        </section >
    </Layout>
  )
}

export default AllProducts