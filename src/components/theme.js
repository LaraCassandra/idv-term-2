import { createMuiTheme, withTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
    status: {
        danger: 'orange',
    },
    typography: {
        color: grey,
    }

})

export default theme;