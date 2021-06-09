import React, { useEffect, useState } from 'react';
//assets
import picMobile from "../../assets/illustration-hero--phone.png";
import picHero from "../../assets/illustration-hero--desktop.png";
//material ui
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';
import Button from '@material-ui/core/Button';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//anime
import anime from 'animejs';


const Intro: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1200,
        });
        setLoading(true);
    }, []);


    if (loading) {
        //animation-first
        var textWrapper: any = document.querySelector(
            '.introAnimationFirst'
        );
        const regex = /\S/g;
        textWrapper.innerHTML = textWrapper.textContent.replace(
            regex,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
            targets: '.introAnimationFirst .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1800,
            delay: (el, i) => 500 + 30 * i,
        });
        //animation-second
        var textWrapperSecond: any = document.querySelector(
            '.introAnimationSecond'
        );
        const regexSec = /\S/g;
        textWrapperSecond.innerHTML = textWrapperSecond.textContent.replace(
            regexSec,
            "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
            targets: '.introAnimationSecond .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1800,
            delay: (el, i) => 500 + 30 * i,
        });
    }

    return (
        <section className="intro">

            <article className="introCard" data-aos="fade-right">
                <h2 className="introAnimationFirst">Konsultacje z</h2>
                <h2 className="introAnimationSecond">lekarzem on-line</h2>
                <p>
                    Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy zadbasz o zdrowie i piękno swego ciała.
                </p>
                <div>
                    <Button color="primary" variant="contained"
                        endIcon={<Brightness1OutlinedIcon />}
                    >
                        Zarezerwuj termin
                    </Button>
                    <Button color="primary" variant="outlined">
                        Jak to działa?
                    </Button>
                </div>
            </article>
            <article className="introCard">
                <img data-aos="fade-down" src={picHero} alt="hero" />
                <img data-aos="fade-up-left" data-aos-duration='1800' data-aos-offset="-200" src={picMobile} alt="mobile" />
            </article>

        </section>
    )
}

export default Intro;
