import React, { useState, useRef } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './styles.css'; // Asegúrate de que el archivo de estilos esté en la misma carpeta

const items = [
  {
    src: 'https://img10.naventcdn.com/avisos/18/01/44/08/58/77/720x532/1475121637.jpg?isFirstImage=true',
    altText: 'Imagen 1',
    caption: 'Tecno Desarrolladora Águila S.A de C.V',
    key: 1,
  },
  {
    src: 'https://img1.wsimg.com/isteam/ip/339bf884-2c3a-42d5-a86b-5fd35751ebd5/Portada.png',
    altText: 'Imagen 2',
    caption: '--',
    key: 2,
  },
  {
    src: 'https://novaciencia.es/wp-content/uploads/2022/02/buitre-leonado.jpg',
    altText: 'Imagen 3',
    caption: 'Tecno Desarrolladora Águila S.A de C.V',
    key: 3,
  },
];

const CarouselComponent = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null); // Ref en vez de findDOMNode

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-container" ref={carouselRef}>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

