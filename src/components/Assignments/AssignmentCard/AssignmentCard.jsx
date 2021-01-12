// Library imports
import React from 'react';
import Image from 'gatsby-image';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ForwardIcon from '@material-ui/icons/Forward';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ListAltIcon from '@material-ui/icons/ListAlt';
// Local imports
import { AssignmentButton } from './subcomponents';

// Custom styling for component
const assignmentCardStyles = makeStyles((theme) => ({
    cardStyle: {
        height: '100%',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
        },
    },
    imageStyle: {
        height: 250,
    },
    contentStyle: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: 0,
        flexGrow: 1,
    },
    textStyle: {
        fontWeight: 400,
    },
    actionsStyle: {
        flexWrap: 'wrap',
        justifyContent: 'space-end',
    },
    buttonStyle: {
        flexGrow: 1,
        margin: `0px ${theme.spacing(0.5)}px ${theme.spacing(
            1
        )}px ${theme.spacing(0.5)}px !important`,
    },
}));

// A card preview of an assignment
function AssignmentCard({ frontmatter, slug, fluidImage, gifImage, dueDate }) {
    // Custom styling
    const {
        cardStyle,
        imageStyle,
        contentStyle,
        textStyle,
        actionsStyle,
        buttonStyle,
    } = assignmentCardStyles();

    const {
        assignmentName,
        assignmentNumber,
        submitURL,
        galleryID,
        feedbackURL,
        available,
        description,
    } = frontmatter;

    // Compute assignment title
    let assignmentTitle;
    if (assignmentNumber < 0) {
        assignmentTitle = assignmentName;
    } else {
        assignmentTitle = `Assignment ${assignmentNumber}: ${assignmentName}`;
    }

    // Render
    return (
        <Card className={cardStyle}>
            {fluidImage && (
                <Image
                    className={imageStyle}
                    alt={assignmentTitle}
                    fluid={fluidImage}
                />
            )}
            {gifImage && (
                <CardMedia
                    className={imageStyle}
                    alt={assignmentTitle}
                    image={gifImage}
                />
            )}
            <CardContent className={contentStyle}>
                <Typography variant='h5' component='h2'>
                    {assignmentTitle}
                </Typography>
                <Typography
                    gutterBottom
                    color='textSecondary'
                    variant='subtitle2'
                >
                    {`Due: ${dueDate}`}
                </Typography>
                <Typography
                    className={textStyle}
                    variant='body2'
                    color='textSecondary'
                    component='p'
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={actionsStyle}>
                <AssignmentButton
                    href={feedbackURL}
                    available={available}
                    className={buttonStyle}
                    size='small'
                    color='primary'
                    startIcon={<ListAltIcon />}
                >
                    {'Feedback'}
                </AssignmentButton>
                <AssignmentButton
                    to={galleryID && `/gallery#${galleryID}-gallery`}
                    available={available}
                    className={buttonStyle}
                    size='small'
                    color='primary'
                    startIcon={<PhotoLibraryIcon />}
                >
                    {'Gallery'}
                </AssignmentButton>
                <AssignmentButton
                    href={submitURL}
                    available={available}
                    className={buttonStyle}
                    size='small'
                    color='primary'
                    startIcon={<CloudUploadIcon />}
                >
                    {'Submit'}
                </AssignmentButton>
                <AssignmentButton
                    to={`/${slug}`}
                    available={available}
                    className={buttonStyle}
                    variant='contained'
                    color='primary'
                    endIcon={<ForwardIcon />}
                >
                    {'View Specs'}
                </AssignmentButton>
            </CardActions>
        </Card>
    );
}

export default AssignmentCard;
