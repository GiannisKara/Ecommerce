import Carousel from "../components/Carousel";


const Singleproduct = () => {
    return ( 
        <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
          <div className='grid lg:grid-cols-2 grid-cols-1 lg:m-[100px] m-3 text-violet-50'>
           <div  > 
            <Carousel /> 
           </div>
          <div className='flex flex-col lg:w-[80%] w-[fit-content] text-center '>
          <h1 className='text-[30px] mb-5'>Product1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mi at leo semper vulputate ac ac urna. </p>
          <h3 className='mt-10'>Select Size:</h3>
           <div className='flex flex-row items-center justify-center p-3'>  
             <div className='p-3 overflow-hidden'>
              <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="XS" name="size" value="XS" />
              <label className='p-2' for="XS">XS</label>
             </div> 
             <div className=' overflow-hidden p-3'>
              <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="S" name="size" value="S" />
              <label className='p-2' for="S">S</label>
             </div> 
             <div className='p-3 overflow-hidden'>
              <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="M" name="size" value="M" />
              <label className='p-2' for="M">M</label>
             </div>
             <div className='p-3 overflow-hidden'>
              <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="L" name="size" value="L" />
              <label className='p-2' for="L">L</label>
             </div> 
             <div className='p-3 overflow-hidden'>
              <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="XL" name="size" value="XL" />
              <label className='p-2' for="XL">XL</label>
             </div> 
           </div>
           <button className='mt-10 mb-10 bg-violet-600 border-2 border-violet-800 text-violet-50 p-2 w-[50%] mx-auto rounded transition ease-in-out delay-0 hover:bg-violet-950 hover:border-violet-50 duration-700 ' type='cart'>Add to cart</button>
         </div>
                
          </div>
        </div>
     );
}
 
export default Singleproduct;