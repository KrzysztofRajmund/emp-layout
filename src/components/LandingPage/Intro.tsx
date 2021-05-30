import React from 'react';
//assets
import picMobile from "../../assets/illustration-hero--phone.png";
import picHero from "../../assets/illustration-hero--desktop.png";
//material ui
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),

            },
        },

    }),
);
const Intro: React.FC = () => {
    const classes = useStyles();
    return (
        <section className="intro">

            <article className="introCard">
                <h1>Konsultacje z lekarzem on-line</h1>
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
                <img src={picHero} alt="hero" />
                <img src={picMobile} alt="mobile" />
            </article>

        </section>
    )
}

export default Intro;