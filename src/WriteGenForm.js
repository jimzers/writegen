import React from 'react'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import InputSlider from "./InputSlider";
import InvertedInputSlider from "./InvertedInputSlider";

import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function WriteGenForm() {
    const classes = useStyles();

    const [MaxSampleLen, setMaxSampleLen] = React.useState(1000);
    const [MinSampleLen, setMinSampleLen] = React.useState(500);
    const [PastContextLen, setPastContextLen] = React.useState(100);
    const [Iterations, setIterations] = React.useState(3);

    const [TextInput, setTextInput] = React.useState("Type some sample text here. Press submit to load in the transformer's predictions!");

    const changeTextInput = (e) => {
        setTextInput(e.target.value);
    }

    console.log({MaxSampleLen, MinSampleLen});
    return (
        <main>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={1}>
                    <Grid item>
                        <InvertedInputSlider props={{"InputTitle": "Min Sample Length"}} data={{"MinSampleLen": MinSampleLen, "setMinSampleLen": setMinSampleLen, "MaxSampleLen": MaxSampleLen}} />
                        <InputSlider props={{"InputTitle": "Max Sample Length", "minVal": MinSampleLen, "maxVal": 1000, "step": 50, "icon": 1}} data={{"topValue": MaxSampleLen, "setTopValue": setMaxSampleLen}}/>
                    </Grid>
                    <Grid item>
                        <InputSlider props={{"InputTitle": "Past Context Length", "minVal": 50, "maxVal": 500, "step": 50, "icon": 2}} data={{"topValue": PastContextLen, "setTopValue": setPastContextLen}} />
                        <InputSlider props={{"InputTitle": "Iterations", "minVal": 1, "maxVal": 10, "step": 1, "icon": 3}} data={{"topValue": Iterations, "setTopValue": setIterations}} />
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper} elevation={3}>
                {/*<TextareaAutosize*/}
                {/*    aria-setsize={100}*/}
                {/*    id="outlined-multiline-static"*/}
                {/*    label="Multiline"*/}
                {/*    multiline*/}
                {/*    aria-label="maximum height"*/}
                {/*    placeholder="Type your prompt here..."*/}
                {/*    rowsMin={10}*/}
                {/*    value={TextInput}*/}
                {/*    variant="outlined"*/}
                {/*    onChange={changeTextInput}*/}
                {/*/>*/}

                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Jumpstart Text</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        multiline
                        rows={2}
                        rowsMin={2}
                        value={TextInput}
                        onChange={changeTextInput}
                        labelWidth={110}
                        placeholder="Write some jumpstart text here to be fed to the writer!"
                    />
                </FormControl>

            </Paper>
        </main>
    )
}