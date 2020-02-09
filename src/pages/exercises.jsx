// Library imports
import React from 'react';
// Project imports
import { AnchorLink, PageLayout, Content } from 'components';
import { exercises } from 'content';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const exerciseStyles = makeStyles(() => ({
    noMargins: {
        margin: 0,
    },
}));

function Exercises() {
    const { noMargins } = exerciseStyles();
    // Render
    return (
        <PageLayout title={'Exercises'}>
            <Content>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant='h4' gutterBottom>
                        {'Exercises'}
                    </Typography>
                    {exercises.map(({ section, questions }) => (
                        <Typography
                            key={section}
                            component='section'
                            paragraph={true}
                        >
                            <Typography variant='h6' gutterBottom>
                                <AnchorLink id={urlify(section)}>
                                    {section}
                                </AnchorLink>
                            </Typography>
                            <ol className={noMargins}>
                                {questions.map((question, i) => (
                                    <Typography
                                        key={i + 1}
                                        component='li'
                                        variant='body1'
                                    >
                                        {question}
                                    </Typography>
                                ))}
                            </ol>
                        </Typography>
                    ))}
                </Typography>
            </Content>
        </PageLayout>
    );
}

export default Exercises;
