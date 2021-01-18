// Library imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const collabStyles = makeStyles((theme) => ({
    collab_paper: {
        maxWidth: 900,
        width: '100%',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginRight: 'auto',
        marginLeft: 'auto',
        overflowX: 'auto',
        color: theme.palette.type === 'dark' ? 'white' : theme.palette.secondary.main
    },
    table_desktop: {
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    table_mobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appbar_wrapper: {
        '&>header': {
            backgroundColor:
                theme.palette.type === 'dark' && theme.palette.secondary.main,
        },
    },
    tableRow_mobile: {
        '&&>th': {
            paddingLeft: '56px',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: '16px',
            },
        },
        '&&>td': {
            paddingRight: '56px',
            [theme.breakpoints.down('xs')]: {
                paddingRight: '16px',
            },
        },
    },
    label: {
        textTransform: 'none',
    },
}));

function CollaborationTable() {
    // Outline of table
    const table = {
        headers: [
            'Your Partner',
            'Course Staff',
            'COS 426 Grads',
            'Classmates',
            'The Internet',
        ],
        rows: [
            'Discuss Concepts With:',
            'Acknowledge Collaboration With:',
            'Expose Code/Solutions To:',
            'View Code/Solutions Of:',
            'Copy Code/Solutions From:',
        ],
        values: [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
    };

    // State for tab indices
    const [value, setValue] = useState(0);
    const handleChange = (event, value) => {
        setValue(value);
    };

    const classes = collabStyles();
    return (
        <Paper className={classes.collab_paper}>
            <Table size='small' className={classes.table_desktop}>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {table.headers.map((columnName, i) => (
                            <TableCell key={i}>{columnName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {table.rows.map((rowName, i) => (
                        <TableRow key={i}>
                            <TableCell component='th' scope='row'>
                                {rowName}
                            </TableCell>
                            {table.values[i].map((permission, j) => (
                                <TableCell key={j} align='center'>
                                    {permission ? (
                                        <CheckIcon color='primary' />
                                    ) : (
                                        <CancelIcon color='inherit' />
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.appbar_wrapper}>
                <AppBar
                    className={classes.table_mobile}
                    position='static'
                    color='default'
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='scrollable'
                        scrollButtons='on'
                    >
                        {table.headers.map((columnName, i) => (
                            <Tab
                                key={i}
                                className={classes.label}
                                label={columnName}
                            />
                        ))}
                    </Tabs>
                </AppBar>
                <Table className={classes.table_mobile}>
                    <TableBody>
                        {table.rows.map((rowName, i) => (
                            <TableRow
                                key={i}
                                className={classes.tableRow_mobile}
                            >
                                <TableCell component='th' scope='row'>
                                    {rowName}
                                </TableCell>
                                <TableCell>
                                    {table.values[i][value] ? (
                                        <CheckIcon color='primary' />
                                    ) : (
                                        <CancelIcon color='inherit' />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

CollaborationTable.propTypes = {
    table: PropTypes.object,
};

export default CollaborationTable;
