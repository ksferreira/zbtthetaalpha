import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CONSTANTS } from './constants';
import '@fontsource-variable/eb-garamond';

let theme = createTheme({
    palette: {
        primary: {
            light: "465a73",
            main: CONSTANTS.ZBT_DEEP_NAVY,
            dark: "#102238",
            contrastText: CONSTANTS.ZBT_TEXT_GRAY
        },
        secondary: {
            light: "#ffd05f",
            main: CONSTANTS.ZBT_GOLD,
            dark: "#b28927",
            contrastText: "#000"
        },
        background: {
            default: CONSTANTS.ZBT_DARK_NAVY
        },
    },
    typography: {
        allVariants: {
            fontFamily: "EB Garamond Variable, sans-serif",
            color: "#fff",
        },
        
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    borderColor: CONSTANTS.ZBT_DARK_NAVY,
                    backgroundColor: CONSTANTS.ZBT_DARK_NAVY
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    border: 0,
                    borderColor: CONSTANTS.ZBT_DARK_NAVY
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: '24px',
                    paddingBottom: '24px',
                }
            }
        }
    }
}); 
export default theme = responsiveFontSizes(theme);