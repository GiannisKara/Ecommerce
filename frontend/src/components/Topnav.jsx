import lotus from '../images/lotus.png'
import { Link } from 'react-router-dom';

const Topnav = () => {
    return ( 
        <div className="w-screen height-[50%] md:text-[25px] lg:text-[30px] bg-gradient-to-r from-violet-200 to-violet-400 border border-none">
        
          <div className='flex flex-row items-center w-max mx-auto mb-3 '>
           <img className='m-1 h-8 w-auto lg:h-[50px] ' src={lotus} />
           <h1 className='text-violet-50'>LOTUS</h1>
        </div>
        <div className='flex flex-row justify-evenly'>  
           <Link className='text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700' to='/'>Home</Link>
         <div >      
           <Link className='text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700' to='./pages/Login'>LogIn</Link>
           <span className='ml-2 mr-2 text-violet-50 '>|</span>
           <Link className='text-violet-50 transition ease-in-out delay-0 hover:text-violet-600 duration-700' to='./pages/Signup'>SignUp</Link>
         </div>    
           <button className=' p-2 rounded-full transition ease-in-out delay-0 hover:bg-violet-600 duration-700'>  
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#f1f1f1" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg> 
           </button>
        </div> 
        
        </div>
        
     );
}
 
export default Topnav;