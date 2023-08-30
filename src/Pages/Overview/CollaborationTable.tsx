import { useState } from 'react';

import { Cancel, CheckCircle } from '@mui/icons-material';
import {
    AppBar,
    Box,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tabs,
    Theme,
    useMediaQuery,
} from '@mui/material';

import { StylesGroup } from '../../typings';

const styles: StylesGroup = {
    container: (theme) => ({
        maxWidth: '900px',
        width: '100%',
        marginTop: 3,
        marginBottom: 3,
        marginRight: 'auto',
        marginLeft: 'auto',
        overflowX: 'auto',
        color: theme.palette.mode === 'dark' ? 'white' : theme.palette.secondary.main,
    }),
    desktopTable: {
        whiteSpace: 'nowrap',
    },
    mobileTable: (theme) => ({
        '&&>th': {
            paddingLeft: 7,
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 2,
            },
        },
        '&&>td': {
            paddingRight: 7,
            [theme.breakpoints.down('sm')]: {
                paddingRight: 2,
            },
        },
    }),
    mobileTabBar: (theme) => ({
        ...(theme.palette.mode === 'dark' && { backgroundColor: theme.palette.secondary.dark }),
    }),
    label: {
        textTransform: 'none',
    },
};

const table = {
    headers: ['Your Partner', 'Course Staff', 'COS 426 Grads', 'Classmates', 'The Internet'],
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

export const CollaborationTable = () => {
    const [activeTab, setActiveTab] = useState(0);

    const isDesktopView = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

    return (
        <Paper sx={styles.container}>
            {isDesktopView ? (
                <Table size='small' sx={styles.desktopTable}>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {table.headers.map((columnName) => (
                                <TableCell key={columnName}>{columnName}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table.rows.map((rowName, i) => (
                            <TableRow key={rowName}>
                                <TableCell component='th' scope='row'>
                                    {rowName}
                                </TableCell>
                                {table.values[i].map((permission, j) => (
                                    <TableCell key={`${j}-${permission}`} align='center'>
                                        {permission ? <CheckCircle color='primary' /> : <Cancel color='inherit' />}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Box>
                    <AppBar component='div' sx={styles.mobileTabBar} position='static' color='default'>
                        <Tabs
                            value={activeTab}
                            onChange={(_e: React.SyntheticEvent, value: number) => setActiveTab(value)}
                            indicatorColor='primary'
                            textColor='primary'
                            variant='scrollable'
                            scrollButtons
                            allowScrollButtonsMobile
                        >
                            {table.headers.map((columnName) => (
                                <Tab key={columnName} sx={styles.label} label={columnName} />
                            ))}
                        </Tabs>
                    </AppBar>
                    <Table>
                        <TableBody>
                            {table.rows.map((rowName, i) => (
                                <TableRow key={rowName} sx={styles.mobileTable}>
                                    <TableCell component='th' scope='row'>
                                        {rowName}
                                    </TableCell>
                                    <TableCell>
                                        {table.values[i][activeTab] ? (
                                            <CheckCircle color='primary' />
                                        ) : (
                                            <Cancel color='inherit' />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            )}
        </Paper>
    );
};
