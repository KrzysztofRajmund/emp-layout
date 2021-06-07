import React, { useState } from 'react';
//material ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
    }),
);
const Faq: React.FC = () => {
    const classes = useStyles();
    const [activeFirst, setActiveFirst] = useState<boolean>(false);
    const [activeSecond, setActiveSecond] = useState<boolean>(false);
    const [activeThird, setActiveThird] = useState<boolean>(false);
    const [activeFourth, setActiveFourth] = useState<boolean>(false);


    const activeHandler = (id: any) => {
        switch (id) {
            case "activeFirst":
                setActiveFirst(!activeFirst);
                break;
            case "activeSecond":
                setActiveSecond(!activeSecond);
                break;
            case "activeThird":
                setActiveThird(!activeThird);
                break;
            case "activeFourth":
                setActiveFourth(!activeFourth);

        }

    }

    return (
        <section className="faq">
            <article className="faqCard">
                <h3>Najczęściej zadawane pytania</h3>
                <Button color="primary" variant="outlined">
                    Sprawdź całe FAQ
                    </Button>
                <div className="faqCardImage">
                </div>
            </article>
            <article className={`${classes.root} faqCard`}>
                <Accordion className={activeFirst ? "accord activeFirst" : "accord"}>
                    <AccordionSummary
                        onClick={() => activeHandler("activeFirst")}
                        expandIcon={<ExpandMoreIcon className={activeFirst ? "accordIcon activeFirst" : "accordIcon"} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={activeFirst ? "accordHeader activeFirst" : "accordHeader"}
                    >
                        Jakie są korzyści teleporady lekarskiej na
                        naszym serwisie?
                    </AccordionSummary>
                    <AccordionDetails className="accordDesc">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                       </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={activeSecond ? "accord activeSecond" : "accord"}>
                    <AccordionSummary
                        onClick={() => activeHandler("activeSecond")}
                        expandIcon={<ExpandMoreIcon className={activeSecond ? "accordIcon activeSecond" : "accordIcon"} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={activeSecond ? "accordHeader activeSecond" : "accordHeader"}
                    >
                        Jak zrealizuję konsultację?
                    </AccordionSummary>
                    <AccordionDetails className="accordDesc">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                       </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={activeThird ? "accord activeThird" : "accord"}>
                    <AccordionSummary
                        onClick={() => activeHandler("activeThird")}
                        expandIcon={<ExpandMoreIcon className={activeThird ? "accordIcon activeThird" : "accordIcon"} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={activeThird ? "accordHeader activeThird" : "accordHeader"}
                    >
                        Czy jest możliwość odwołania wcześniej zarezerwowanej wizyty?
                    </AccordionSummary>
                    <AccordionDetails className="accordDesc">
                        <p>
                            W przypadkach losowych gdy nie mogą Państwo zrealizować wizyty w umówionym terminie istnieje możliwość zmiany daty wizyty bądź jej odwołania do 24h przed planowym terminem. Dokonają Państwo tego za pomocą linka przesłanego w potwierdzeniu rezerwacji na podany przez Państwa adres e-mail.
                       </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={activeFourth ? "accord activeFourth" : "accord"}>
                    <AccordionSummary
                        onClick={() => activeHandler("activeFourth")}
                        expandIcon={<ExpandMoreIcon className={activeFourth ? "accordIcon activeFourth" : "accordIcon"} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={activeFourth ? "accordHeader activeFourth" : "accordHeader"}
                    >
                        Co się dzieje w przypadku problemów technicznych?
                    </AccordionSummary>
                    <AccordionDetails className="accordDesc">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                       </p>
                    </AccordionDetails>
                </Accordion>

            </article>

        </section>
    )
}

export default Faq;
