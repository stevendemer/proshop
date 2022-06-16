import { orange, purple, deepOrange, red, green, cyan, indigo } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: deepOrange[700]
        },
        secondary: {
            main: indigo[400]

        }
    },
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif',
            'Poppins',
            'sans-serif'
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;