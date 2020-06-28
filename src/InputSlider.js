import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import FormatTextdirectionLToRIcon from '@material-ui/icons/FormatTextdirectionLToR';
import LoopIcon from '@material-ui/icons/Loop';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 55,
    },
});

const iconMap = {
    1: <FormatTextdirectionLToRIcon/>,
    2: <HourglassEmptyIcon/>,
    3: <LoopIcon/>
}

export default function InputSlider(props) {
    const classes = useStyles();

    const title = props.props["InputTitle"];
    const value = props.data["topValue"];
    const setValue = props.data["setTopValue"];
    const minValue = props.props["minVal"];
    const maxLimit = props.props["maxVal"];
    const stepVal = props.props["step"];

    const icon = iconMap[props.props["icon"]];

    const isDisabled = props.data["isDisabled"];

    // console.log("the value: " + value)

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < minValue) {
            setValue(minValue);

        } else if (value > maxLimit) {
            setValue(maxLimit);
        }
    };

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    {icon}
                </Grid>
                <Grid item xs>
                    <Slider
                        disabled={isDisabled}
                        min={minValue}
                        max={maxLimit}
                        step={stepVal}
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        disabled={isDisabled}
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: stepVal,
                            min: minValue,
                            max: maxLimit,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}