import React from 'react';
import { Link } from 'gatsby';
import withRoot from '../withRoot';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import { Layout } from 'components';

import { PrincetonShield } from 'images';

const styles = (theme) => ({
    section: {
        marginTop: theme.spacing.unit * 3,
    },
    toolbar: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        marginRight: theme.spacing.unit,
        overflow: 'hidden',
    },
});

const IndexPage = ({ classes }) => (
    <Layout>
        <Typography variant="h3" gutterBottom>
            Materials
        </Typography>
        <Typography>Welcome to your new Gatsby site.</Typography>
        <Typography>This page has been styled using Material-UI.</Typography>

        <section className={classes.section}>
            <Typography variant="h6" gutterBottom>
                Sample Components
            </Typography>
            <div className={classes.toolbar}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Primary
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                >
                    Secondary
                </Button>
            </div>
            <div className={classes.toolbar}>
                <Fab
                    color="primary"
                    aria-label="Add"
                    className={classes.button}
                >
                    <AddIcon />
                </Fab>
                <Fab
                    color="primary"
                    aria-label="Edit"
                    className={classes.button}
                >
                    <Icon>edit_icon</Icon>
                </Fab>
                <Fab aria-label="Delete" className={classes.button}>
                    <img src={PrincetonShield} width="auto" />
                </Fab>
                <Fab
                    color="secondary"
                    aria-label="Star"
                    className={classes.button}
                >
                    <Icon>star</Icon>
                </Fab>
            </div>
        </section>

        <section className={classes.section}>
            <Link to="/page-2/">Go to page 2</Link>
        </section>
    </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));
