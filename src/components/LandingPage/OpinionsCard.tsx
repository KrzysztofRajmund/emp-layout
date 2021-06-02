import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            "& .MuiSvgIcon-root": {
                margin: "0.1rem",
            },
        },
        header: {
            display: "flex",
            justifyContent: "space-between"

        },
        stars: {
            backgroundColor: "#14CAFF",
            color: "#fff",
            fontSize: "2rem",
            borderRadius: "0.125rem",
            padding: "0.25rem",
        },
        date: {
            textAlign: "right",
        },
        avatar: {
            height: "4rem",
            width: "4rem",
            backgroundColor: "#4432FF",
        },
    }),
);

export default function OpinionsCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActions className={classes.header} >
                <div>
                    <GradeIcon className={classes.stars} />
                    <GradeIcon className={classes.stars} />
                    <GradeIcon className={classes.stars} />
                    <GradeIcon className={classes.stars} />
                    <GradeIcon className={classes.stars} />
                </div>
                <span className={classes.date}>10 lipca 2020</span>
            </CardActions>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Polecam Pana dr. Wysłuchał wszystkiego i dokładnie wytłumaczył następny zadowolony pacjet. E-konsultacja to bardzo dobra forma wizyty gdy musimy zostać w…
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Avatar className={classes.avatar}>
                    <VisibilityIcon />
                </Avatar>
            </CardActions>
        </Card>
    );
}