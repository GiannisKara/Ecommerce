import '@splidejs/react-splide/css/skyblue';
import jordan1 from '../images/jordan1.png'
import jordan2 from '../images/jordan2.png'
import tshirt1 from '../images/t-shirt-1.png'
import { Splide, SplideSlide, SplideTrack, Slide } from '@splidejs/react-splide';


const CarouselComp = () => {  

  const img = [
    {
      src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zzmfk3kwuw3ktkilxfnp/%CF%80%CE%B1%CF%80%CE%BF%CF%85%CF%84%CF%83%CE%B9%CE%B1-air-jordan-1-mid-83Lm6R.png"
    },
    {
      src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zzmfk3kwuw3ktkilxfnp/%CF%80%CE%B1%CF%80%CE%BF%CF%85%CF%84%CF%83%CE%B9%CE%B1-air-jordan-1-mid-83Lm6R.png"
    },
    {
      src: tshirt1
    },
];
   
  return (
   <div> 
     
     <Splide options={ {
    rewind: true,
    gap   : '1rem',
    hasTrack: true

  } } aria-label="My Favorite Images" className=" w-[30rem] h-auto relative ">
     
     {img.map(image =>( 
       <SplideSlide className="border border-violet-800 ">
         <img src={image.src} />
       </SplideSlide>
    ))}
    
     </Splide>
   
    </div>
  );
}

export default CarouselComp;