import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

import { default as StaffGrid } from './staffGrid';
import text from './staffText';

const styles = (theme) => ({
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
});

class Staff extends React.Component {
    state = {
        show_people: false,
    };

    handleChange = () => {
        this.setState((state) => ({ show_people: !state.show_people }));
    };

    render() {
        const { classes } = this.props;
        const { show_people } = this.state;

        return (
            <Typography component="div" paragraph={true}>
                <Typography variant="h4" gutterBottom>
                    {'Staff'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.staff[0]}
                </Typography>
                <div className={classes.staff_desktop}>
                    <StaffGrid />
                </div>
                <div className={classes.staff_mobile}>
                    <Typography
                        component={'div'}
                        paragraph={true}
                        align="center"
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.toggle}
                            onClick={this.handleChange}
                        >
                            {show_people ? 'Hide' : 'Show'}
                        </Button>
                    </Typography>
                    <Slide
                        direction="up"
                        in={show_people}
                        mountOnEnter
                        unmountOnExit
                    >
                        <StaffGrid />
                    </Slide>
                </div>
            </Typography>
        );
    }
}

export default withStyles(styles)(Staff);
