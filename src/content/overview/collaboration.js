import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import text from './collaborationText';

const styles = (theme) => ({
    collab_paper: {
        maxWidth: 900,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginRight: 'auto',
        marginLeft: 'auto',
        overflowX: 'auto',
    },
    collab_table: {
        minWidth: 700,
        whiteSpace: 'nowrap',
    },
});

function CollaborationPage(props) {
    const { classes } = props;
    return (
        <Typography component={'div'} paragraph={true}>
            <Typography variant="h4" gutterBottom>
                {'Collaboration Policy'}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.collaboration[0]}
                <i>{text.collaboration[1]}</i>
                {text.collaboration[2]}
                <b>{text.collaboration[3]}</b>
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.collaboration[4]}
            </Typography>
            <Paper className={classes.collab_paper}>
                <Table padding="dense" className={classes.collab_table}>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="right">
                                {`Your Partner`}
                            </TableCell>
                            <TableCell align="right">
                                {`Course Staff`}
                            </TableCell>
                            <TableCell align="right">
                                {`COS 426 Grads`}
                            </TableCell>
                            <TableCell align="right">{`Classmates`}</TableCell>
                            <TableCell align="right">
                                {`The Internet`}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {`Discuss Concepts With:`}
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {`Acknowledge Collaboration With:`}
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {`Expose Code/Solutions To:`}
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {`View Code/Solutions Of:`}
                            </TableCell>
                            <TableCell align="center">
                                <CheckIcon color="primary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {`Copy Code/Solutions From:`}
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                            <TableCell align="center">
                                <CancelIcon color="secondary" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
            <Typography component={'div'} paragraph={true}>
                <Typography variant="h6">{'Individual Solutions'}</Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.individual[0]}
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body1" paragraph={true}>
                            {text.individual[1]}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" paragraph={true}>
                            {text.individual[2]}
                        </Typography>
                    </li>
                </ul>
                <Typography variant="body1" paragraph={true}>
                    {text.individual[3]}
                </Typography>
                <Typography variant="h6">
                    {'Collaboration with Course Staff'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.staff[0]}
                </Typography>
                <Typography variant="h6">
                    {'Collaboration with Partners'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.partners[0]}
                    <i>{text.partners[1]}</i>
                    {text.partners[2]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.partners[3]}
                </Typography>
                <Typography variant="h6">
                    {'Collaboration with Classmates'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.class[0]}
                </Typography>
                <Typography variant="h6">
                    {'Concerning Electronic Communication'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.electronic[0]}
                    <a href="https://piazza.com/princeton/spring2019/cos426/home?">
                        {text.electronic[1]}
                    </a>
                    {text.electronic[2]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.electronic[3]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    <i>{text.electronic[4]}</i>
                </Typography>
                <Typography variant="h6">{'Final Note'}</Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.note[0]}
                    <i>{text.note[1]}</i>
                    {text.note[2]}
                </Typography>
            </Typography>
        </Typography>
    );
}

export default withStyles(styles)(CollaborationPage);
