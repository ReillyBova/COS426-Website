// Library imports
import React, { useState } from 'react';
// Project imports
import { AnchorLink } from 'components';
import { staff } from 'content';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
// Local imports
import { StaffGrid } from './subcomponents';

// Custom styling for component
const staffStyles = makeStyles((theme) => ({
    staff_desktop: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    staff_mobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toggle: {
        width: '100px',
    },
}));

function Staff() {
    // State to determine if staff should be displayed
    const [isVisible, setVisibility] = useState(false);
    const toggleVisibility = () => {
        setVisibility(!isVisible);
    };

    // CSS classes for styling
    const classes = staffStyles();
    const title = 'Staff';

    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' gutterBottom>
                <AnchorLink id={urlify(title)}>{title}</AnchorLink>
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {staff.text[0]}
            </Typography>
            <div className={classes.staff_desktop}>
                <StaffGrid />
            </div>
            <div className={classes.staff_mobile}>
                <Typography component={'div'} paragraph={true} align='center'>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.toggle}
                        onClick={toggleVisibility}
                    >
                        {isVisible ? 'Hide' : 'Show'}
                    </Button>
                </Typography>
                <Slide direction='up' in={isVisible} mountOnEnter unmountOnExit>
                    <StaffGrid />
                </Slide>
            </div>
        </Typography>
    );
}

export default Staff;
