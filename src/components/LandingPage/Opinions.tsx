import React, { useRef, useEffect } from 'react';
//components
import OpinionsCard from "./OpinionsCard";
//data
import data from "../../opinionsData.json";


const Opinions: React.FC = () => {
    let indicatorArray = new Array(data.opinions.length);
    const refElement: any = useRef(null);
    let list = document.getElementsByClassName("listIndicator");

    useEffect(() => {
        let listDefaultActive = document.getElementsByClassName("listIndicator")[1];
        listDefaultActive.classList.add("active");
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

        e.target.classList.add("active");
        console.log(window.innerWidth, document.documentElement.clientWidth)
        let listEl = document.getElementsByClassName("listIndicator")[1];
        let domRect = listEl.getBoundingClientRect();
        console.log(domRect)
    }
    return (
        <div className="opinions">
            <article>
                <h3>Co mówią zadowoleni klienci</h3>
            </article>
            <section id="opinionsSlider" ref={refElement} className="opinionsSlider">
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
