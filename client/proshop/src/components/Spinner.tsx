import { CircularProgress, LinearProgress, Container, Box } from "@mui/material";
import { indigo, blue, cyan, purple } from '@mui/material/colors';


const Spinner = () => {

    return (
        <>
            <Box sx={{
                my: '120px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <CircularProgress sx={{
                    width: '220px',
                    color: cyan[500]
                }} size={120} />
            </Box>
        </>
    );

}


export default Spinner;