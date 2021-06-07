import React, { useEffect } from 'react';
//assets
import picMobile from "../../assets/illustration-hero--phone.png";
import picHero from "../../assets/illustration-hero--desktop.png";
//material ui
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';
import Button from '@material-ui/core/Button';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro: React.FC = () => {

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []);

    return (
        <section className="intro">

            <article className="introCard" data-aos="fade-right">
                <h2>Konsultacje z lekarzem on-line</h2>
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
                <img data-aos="fade-up-left" src={picMobile} alt="mobile" />
            </article>

        </section>
    )
}

export default Intro;
