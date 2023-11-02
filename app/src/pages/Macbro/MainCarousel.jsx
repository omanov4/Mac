import {  Image, } from '@chakra-ui/react';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const itemsLength = Array.from({ length: 4 });

const items = itemsLength.map((item, index) => {
    const style = { height: 200 + index * 10 };
    return <div className="item" style={style} data-value={index + 1} />;
});

const Carousel = () => (
    <AliceCarousel
        autoHeight  
        infinite
        mouseTracking
        items={items}
    >
        <Image w={"100%"} h={"800px"} src='https://cdn.macbro.uz/macbro/c312cd0b-ee0f-42d2-af69-19bcbbad8cd5'/>
        <Image w={"100%"} h={"800px"} src='https://cdn.macbro.uz/macbro/44147e12-345c-4a5c-a7d5-41257da6a6b1'/>
        <Image w={"100%"} h={"800px"} src='https://cdn.macbro.uz/macbro/d5b6a32c-4d20-4433-809b-46f17532a285'/>
        <Image w={"100%"} h={"800px"} src='https://cdn.macbro.uz/macbro/bcee4165-a3a3-425f-b48f-5dce3114e432'/>

        </AliceCarousel>
);
export default Carousel