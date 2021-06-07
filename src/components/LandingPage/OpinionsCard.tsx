import React, { useState } from 'react';
//material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GradeIcon from '@material-ui/icons/Grade';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "43.2rem",
            height: "39.6rem",
            padding: "3.5rem 3rem",
            margin: "0 1.4rem",
            borderRadius: "0.5rem",
            boxShadow: "none",
            border: "1px solid #ECECEC",
            boxSizing: "border-box",
            cursor: "context-menu",
            "& .MuiSvgIcon-root": {
                margin: "0.1rem",
            },
        },
        header: {
            display: "flex",
            justifyContent: "space-between"

        },
        starsIcon: {
            backgroundColor: "#14CAFF",
            color: "#fff",
            fontSize: "2rem",
            borderRadius: "0.125rem",
            padding: "0.25rem",
        },
        dateFont: {
            textAlign: "right",
            fontSize: "1.4rem",
            color: "#0E0E0E",
            opacity: 0.32,
        },
        content: {
            padding: "1.2rem 1rem 0rem 1rem",
        },

        footer: {
            width: "40%",
            padding: "5rem 3rem 0rem 3rem",
            marginLeft: "-1.7rem",
            cursor: "pointer",
        },

        avatarImage: {
            height: "4.5rem",
            width: "4.5rem",
            transition: "all 0.3s ease-in-out",
        },
        avatarEye: {
            height: "4rem",
            width: "4rem",
            backgroundColor: "#4432FF",
            transition: "all 0.3s ease-in-out",
        },

        eye: {
            width: "2.2rem",
            height: "2.2rem",
        },

    }),
);


interface Props {
    id?: number,
    stars: number,
    name: string,
    date: string,
    desc: string,
    avatar: string
}

const OpinionsCard: React.FC<Props> = ({ stars, name, date, desc, avatar }) => {
    const classes = useStyles();

    const [hoverImage, setHoverImage] = useState<boolean>(false);

    const hoverHandler = (): void => {
        setHoverImage(true);
    }
    const hoverLeaveHandler = (): void => {
        setHoverImage(false);
    }
    let starsArray = new Array(stars);
    return (
        <Card className={`${classes.root} `}>
            <CardActions className={classes.header} >
                <div>
                    {
                        [...starsArray].map((e, i) => <GradeIcon className={classes.starsIcon} key={i} />)
                    }

                </div>
                <span className={classes.dateFont}>{date}</span>
            </CardActions>
            <CardContent className={classes.content}>
                <p>
                    {desc}
                </p>
            </CardContent>
            <CardActions className={classes.footer} disableSpacing onMouseEnter={hoverHandler} onMouseLeave={hoverLeaveHandler}>
                {
                    hoverImage ? (<><Avatar className={classes.avatarImage} alt="avatar" src={avatar} />
                        <span>{name}</span></>
                    ) : (
                        <Avatar className={classes.avatarEye} >
                            <VisibilityIcon className={classes.eye} />
                        </Avatar>
                    )
                }
            </CardActions>
        </Card>
    );
}

export default OpinionsCard;