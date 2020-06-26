import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import FormatTextdirectionLToRIcon from '@material-ui/icons/FormatTextdirectionLToR';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 55,
    },
});

export default function InvertedInputSlider(props) {
    const classes = useStyles();
    const value = props.data.MinSampleLen;
    const setValue = props.data.setMinSampleLen;
    const maxValue = props.data.MaxSampleLen;
    // console.log("the value: " + value)

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 50) {
            setValue(50);
        } else if (value > maxValue) {
            setValue(maxValue);
        }
    };

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                {props.props["InputTitle"]}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <FormatTextdirectionLToRIcon />
                </Grid>
                <Grid item xs>
                    <Slider
                        track="inverted"
                        min={100}
                        max={maxValue}
                        step={50}
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 50,
                            min: 100,
                            max: maxValue,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}