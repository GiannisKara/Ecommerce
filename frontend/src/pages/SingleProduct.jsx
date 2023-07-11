import tshirt1 from '../images/t-shirt-1.png'

const Singleproduct = () => {
    return ( 
        <div className="min-h-screen min-w-screen bg-gradient-to-r from-violet-200 to-violet-400  lg:p-20">
          <div className='grid grid-cols-2 lg:m-[100px] m-3 text-violet-50'>
           <div  > 
            <img className="h-auto p-3 w-[35rem] " src={tshirt1} />
           </div>
          <div className='flex flex-col lg:w-[80%] w-[fit-content] text-center '>
          <h1 className='text-[30px] mb-5'>Product1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mi at leo semper vulputate ac ac urna. </p>
          <h3 className='mt-10'>Select Size:</h3>
           <div className='flex flex-row items-center justify-center p-3'>  
            <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="S" name="size" value="S" />
            <label className='p-2' for="S">S</label>
            <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="M" name="size" value="M" />
            <label className='p-2' for="M">M</label>
            <input className='w-4 lg:w-5 h-4 lg:h-5 text-violet-600 bg-violet-100 border-violet-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-violet-800 focus:ring-2 dark:bg-violet-700 dark:border-violet-600' type="radio" id="L" name="size" value="L" />
            <label className='p-2' for="L">L</label>
           </div>
         </div>
                
          </div>
        </div>
     );
}
 
export default Singleproduct;