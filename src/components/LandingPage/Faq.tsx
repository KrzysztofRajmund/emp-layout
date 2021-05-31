import React from 'react';
//material ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),

            },
        },

    }),
);
const Faq: React.FC = () => {
    const classes = useStyles();
    return (
        <section className="faq">

            <article className="faqCard">
                <h1>Konsultacje z lekarzem on-line</h1>
                <Button color="primary" variant="outlined">
                    Jak to działa?
                    </Button>

            </article>
            <article className="faqCard">
                Article 2
            </article>

        </section>
    )
}

export default Faq;
