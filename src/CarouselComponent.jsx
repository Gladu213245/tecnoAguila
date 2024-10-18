import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const items = [
    {
      src: 'https://img10.naventcdn.com/avisos/18/01/44/08/58/77/720x532/1475121637.jpg?isFirstImage=true',
      altText: 'Imagen 1',
      caption: 'Tecno Desarrolladora Águila S.A de C.V',
    },
    {
      src: 'https://img1.wsimg.com/isteam/ip/339bf884-2c3a-42d5-a86b-5fd35751ebd5/Portada.png',
      altText: 'Imagen 2',
      caption: '--',
    },
    {
      src: 'https://novaciencia.es/wp-content/uploads/2022/02/buitre-leonado.jpg',
      altText: 'Imagen 3',
      caption: 'Tecno Desarrolladora Águila S.A de C.V',
    },
  ];

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.altText} />
          <p className="legend">{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;


