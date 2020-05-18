import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#fff',
        },
    },
    typography: {
        color: grey,
    },
    
})

export default theme;