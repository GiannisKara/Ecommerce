import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import jordan1 from '../images/jordan1.png'
import jordan2 from '../images/jordan2.png'

<Splide  aria-label="My Favorite Images">
              
<SplideSlide className='h-auto mx-auto w-[35rem]'>
 <img  src={jordan1} alt="Image 1"/>
</SplideSlide>
<SplideSlide className='h-auto mx-auto w-[35rem]'>
 <img  src={jordan2} alt="Image 1"/>
</SplideSlide>


</Splide>