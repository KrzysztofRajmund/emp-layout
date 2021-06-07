import React, { useRef, useEffect } from 'react';
//components
import OpinionsCard from "./OpinionsCard";
//data
import data from "../../opinionsData.json";
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Opinions: React.FC = () => {
    let indicatorArray = new Array(data.opinions.length);
    const refElement: any = useRef(null);
    let list = document.getElementsByClassName("listIndicator");

    useEffect(() => {
        let listDefaultActive = document.getElementsByClassName("listIndicator")[1];
        listDefaultActive.classList.add("active");
        AOS.init({
            offset: 400,
            duration: 900,
        });
    }, [])

    const indicatorHandler = (e: any, i: any) => {

        if (i < 0) {
            return
        }

        if (i === 0) {
            refElement.current.style.transform = "translateX(0rem)"
        }
        if (i === 1) {
            refElement.current.style.transform = "translateX(-39rem)"
        }
        if (i > 1 && i < data.opinions.length - 2) {
            refElement.current.style.transform = `translateX(calc(-39rem - (${i - 1} * 43.2rem)))`
        }

        if (i >= data.opinions.length - 2) {
            refElement.current.style.transform = `translateX(calc(-39rem - (${data.opinions.length - 4} * 43.2rem)))`
        }

        for (let i = 0; i < list.length; i++) {
            if (list[i].className.includes("active")) {
                list[i].classList.remove("active")
            }
        }

        e.target.classList.add("active")
    }
    return (
        <div className="opinions">
            <article data-aos="fade-up">
                <h3>Co mówią zadowoleni klienci</h3>
            </article>
            <section id="opinionsSlider" ref={refElement} className="opinionsSlider" data-aos="fade-right">
                {data.opinions.map((opinion) => {
                    return (
                        <div className="opinionsItem" key={opinion.id}>
                            <OpinionsCard stars={opinion.stars} name={opinion.name} date={opinion.date} desc={opinion.desc} avatar={opinion.avatar} />
                        </div>
                    )
                })}
            </section>
            <ul className="opinionsIndicator">
                {[...indicatorArray].map((x, i) => <li className="listIndicator" onClick={(e) => indicatorHandler(e, i)} key={i}></li>)}
            </ul>
        </div>
    )
}

export default Opinions;
