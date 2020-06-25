import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom>
                    WriteGen - Your copypasta creator!
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'WriteGen writes AI generated passages. But it needs your help! '}
                    {'Type in some text below and press submit to see your short story!'}
                </Typography>
                <Typography variant="body1">Do something here I guess</Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Checkout my <a href={"https://github.com/jimzers/"}>other work</a>!</Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}