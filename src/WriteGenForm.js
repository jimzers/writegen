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
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import axios from "axios";

const apiUrl = '/api/generate'

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
        textAlign: 'center'
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

    const [Loading, setLoading] = React.useState(false);

    const [GeneratorOutput, setGenerateOutput] = React.useState(null);
    const [apiError, setApiError] = React.useState(false);

    const changeTextInput = (e) => {
        setTextInput(e.target.value);
    }

    // function sleep(milliseconds) {
    //     const date = Date.now();
    //     let currentDate = null;
    //     do {
    //         currentDate = Date.now();
    //     } while (currentDate - date < milliseconds);
    // }


    const submitForm = () => {
        setApiError(false);
        setLoading(true);
        // sleep(3000);
        axios.post(apiUrl, {
            "input": TextInput,
            "iterations": Iterations,
            "min_sample_len": MinSampleLen,
            "max_sample_len": MaxSampleLen,
            "past_context_len": PastContextLen
        })
            .then((response) => {
                setGenerateOutput(response.data['output']);
            })
            .catch((error) => {
                console.log(error);
                setApiError(true);
            })
            .then(() => {
                setLoading(false);
            })
    }

    // console.log({MaxSampleLen, MinSampleLen});
    return (
        <main>
            <Grid container spacing={2}>
                <Grid item>
                    {!apiError ? '' : (
                        <Alert severity="error" onClose={() => {
                            setApiError(false)
                        }}>Sorry! Our AI writer is having some difficulty handling your request.</Alert>
                    )}
                    <Paper className={classes.paper} elevation={3}>
                        <Grid container direction="row" justify="center" spacing={3}>
                            <Grid item align="center" xs>
                                <InvertedInputSlider props={{"InputTitle": "Min Sample Length"}} data={{
                                    "MinSampleLen": MinSampleLen,
                                    "setMinSampleLen": setMinSampleLen,
                                    "MaxSampleLen": MaxSampleLen,
                                    "isDisabled": Loading
                                }}/>
                            </Grid>
                            <Grid item align="center" xs>
                                <InputSlider props={{
                                    "InputTitle": "Max Sample Length",
                                    "minVal": MinSampleLen,
                                    "maxVal": 1000,
                                    "step": 50,
                                    "icon": 1
                                }} data={{"topValue": MaxSampleLen, "setTopValue": setMaxSampleLen, "isDisabled": Loading}}/>
                            </Grid>
                            <Grid item align="center" xs>
                                <InputSlider props={{
                                    "InputTitle": "Past Context Length",
                                    "minVal": 50,
                                    "maxVal": 500,
                                    "step": 50,
                                    "icon": 2
                                }} data={{"topValue": PastContextLen, "setTopValue": setPastContextLen, "isDisabled": Loading}}/>
                            </Grid>
                            <Grid item align="center" xs>
                                <InputSlider props={{
                                    "InputTitle": "Iterations",
                                    "minVal": 1,
                                    "maxVal": 10,
                                    "step": 1,
                                    "icon": 3
                                }} data={{"topValue": Iterations, "setTopValue": setIterations, "isDisabled": Loading}}/>
                            </Grid>
                            {/*</Paper>*/}
                            {/*<Paper className={classes.paper} elevation={3}>*/}

                            <Grid item xs={12}>
                                <FormControl disabled={Loading} fullWidth className={classes.margin} variant="outlined">
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
                            </Grid>

                        </Grid>

                    </Paper>
                    <Button variant="contained" color="primary" onClick={submitForm}>
                        Generate my writing!
                    </Button>
                </Grid>

                {!Loading ? '' : (
                    <Grid item>
                        <LinearProgress/>
                    </Grid>
                )}

                <Grid item>
                    {!GeneratorOutput ? '' : (
                        <Paper className={classes.paper} elevation={3}>
                            <Typography variant="body1">
                                {GeneratorOutput}
                            </Typography>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        </main>
    )
}