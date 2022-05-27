import { orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        // mode: 'dark'
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