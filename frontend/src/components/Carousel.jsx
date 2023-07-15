import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import jordan1 from '../images/jordan1.png'
import jordan2 from '../images/jordan2.png'

const Carousel = () => {
    return ( 
      <Splide 
      className='h-auto mx-auto w-[35rem]'
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
        
      aria-label="My Favorite Images">        
        <SplideSlide>
          <img src={jordan2} alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img   src={jordan1} alt="Image 1"/>
        </SplideSlide>
        
      </Splide>
    );
}
 
export default Carousel;