import React, { useState } from 'react';
//react bootstrap
import { Carousel } from "react-bootstrap";
//components
import OpinionsCard from "./OpinionsCard"

const Opinions: React.FC = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="opinions">
            <article >
                <h3>Co mówią zadowoleni klienci</h3>
            </article>
            <Carousel className="opinionsSlider" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="opinionsItem">
                    <OpinionsCard />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Opinions;
