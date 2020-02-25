// Library imports
import React, { useState } from 'react';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

// Custom styling for component
const scoreCalculatorStyles = makeStyles((theme) => ({
    cardStyle: {
        maxWidth: 600,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    contentStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textField: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        maxWidth: 100,
        maxHeight: 70,
    },
    totalScore: {
        paddingRight: 16,
        paddingBottom: 19,
    },
    totalScoreSubtitle: {
        position: 'absolute'
    }
}));

// A card preview of an assignment
function ScoreCalculator({ requiredPoints, optionalPoints, dimFactor }) {
    // CSS classes for styling
    const { cardStyle, contentStyle, textField, totalScore, totalScoreSubtitle } = scoreCalculatorStyles();

    // Hooks to keep track of user input
    const [requiredScore, setRequiredScore] = useState(requiredPoints);
    const [optionalScore, setOptionalScore] = useState(optionalPoints);
    const [artScore, setArtScore] = useState(1);

    // Compute final score from input
    const requiredFeatureScore = Math.min(requiredPoints, requiredScore);
    const optionalFeatureScore = Math.min(optionalPoints, optionalScore);
    const extraFeatureScore = Math.max(optionalScore - optionalPoints, 0);
    const diminishingExtraScore =
        (dimFactor * (1 - Math.pow(dimFactor, extraFeatureScore))) /
        (1 - dimFactor);
    const artContentScore = artScore;

    const floatingPointScore =
        requiredFeatureScore +
        optionalFeatureScore +
        diminishingExtraScore +
        artContentScore;
    const finalScore = Math.round(floatingPointScore * 2.0) / 2.0;

    // Functions to update state on input
    const handleChange = (setState, value) => {
        const number = parseFloat(value);
        setState(isNaN(number) ? 0 : number);
    };
    const requiredChange = (event) => {
        handleChange(setRequiredScore, event.target.value);
    };
    const optionalChange = (event) => {
        handleChange(setOptionalScore, event.target.value);
    };
    const artChange = (event) => {
        handleChange(setArtScore, event.target.value);
    };

    // Render
    return (
        <Card className={cardStyle} component='form'>
            <CardContent className={contentStyle}>
                <TextField
                    defaultValue={requiredPoints}
                    helperText='Required score'
                    label='r'
                    onChange={requiredChange}
                    type='number'
                    className={textField}
                />
                <TextField
                    defaultValue={optionalPoints}
                    helperText='Optional score'
                    label='n'
                    onChange={optionalChange}
                    type='number'
                    className={textField}
                />
                <TextField
                    defaultValue={1}
                    helperText='Art score'
                    label='a'
                    onChange={artChange}
                    type='number'
                    className={textField}
                />
            <div className={totalScore}>
                    <Typography variant='h2' component='div'>
                        {finalScore}
                    </Typography>
                    <Typography
                        variant='caption'
                        color='textSecondary'
                        component='div'
                        className={totalScoreSubtitle}
                    >
                        {'Total score'}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default ScoreCalculator;
