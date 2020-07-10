import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import WriteGenForm from "./WriteGenForm";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://adamlee.me/">
                Adam Lee
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const muiTheme = createMuiTheme({
//     spacing: 2
// })

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    body: {
        marginBottom: theme.spacing(3)
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container component="main" className={classes.main} maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom>
                    WriteGen
                </Typography>
                <Typography variant="h5" component="h4" gutterBottom>
                    {'Your own personal writer!'}
                </Typography>
                <Typography variant="body1">
                    {'WriteGen uses AI to write passages for you. But it needs your help! '}
                    {'Type in some text below and press submit to see your short story!'}
                </Typography>
            </Container>
            <Container className={classes.body} maxWidth="md">
                <WriteGenForm/>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Check out my
                        <Link color="primary" variant="inherit" href={"https://github.com/jimzers/"}> other work</Link>!</Typography>
                    <Copyright/>
                </Container>
            </footer>
        </div>
    );
}