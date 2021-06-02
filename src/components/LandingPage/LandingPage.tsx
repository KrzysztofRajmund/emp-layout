import React from 'react';
//components
import Intro from "./Intro";
import Profit from "./Profit";
import Faq from "./Faq";
import Opinions from "./Opinions";
//material ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//MATERIAL UI
const theme = createMuiTheme({
    //palette
    palette: {
        primary: {
            main: "#4432ff",
        },
    },
});
theme.props = {
    MuiButton: { // `MuiButton` is the global class name for the <Button /> component
        disableElevation: true, // this prop disables the drop shadow on all Buttons
    },
}
theme.overrides = {
    //button
    MuiButton: {
        root: {
            padding: "1.2rem 1.5rem",
            fontWeight: 600,
            borderRadius: "4px",
            textTransform: 'none', // removes uppercase transformation as it si default of material UI

        },
        outlinedPrimary: {
            border: "2px solid #4432ff",
            padding: "1.2rem 1.5rem",
            '&:hover': {
                backgroundColor: "#eee",
                border: "2px solid #4432ff",
            },
        }
    }
}


const LandingPage: React.FC = () => {
    return (
        <div className="gridContainer">
            <ThemeProvider theme={theme}>
                <Intro />
                <Profit />
                <Faq />
                <Opinions />
            </ThemeProvider>
        </div>
    )
}
export default LandingPage
