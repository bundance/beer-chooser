import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Search from '../search/search.container';
import { LOADING } from '../../constants/store-keys/app.store-keys';

export const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    spinner: {
        color: theme.palette.common.red,
        position: 'absolute',
        top: '25%',
        left: '50%',
        marginLeft: -12,
    },
    hiddenSpinner: {
        display: 'none'
    },
    greyedOut: {
        opacity: 0.33,
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    }
});

export const HeroUnit = ({ classes, loadingState }) => {
    const spinnerClassName = loadingState === LOADING ? classes.spinner : classes.hiddenSpinner;
    const heroContentClass = loadingState === LOADING ? classes.greyedOut : classes.heroContent;

    return ( 
        <div className={classes.heroUnit}>
            <CircularProgress size={100} className={spinnerClassName} />
            <div className={heroContentClass}>
                <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                    Beer Chooser
                </Typography>
                <Typography variant="title" align="center" color="textSecondary" paragraph>
                    Enter your food and we'll show what beer goes best with it.
                </Typography>
                <div>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            <Search />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(HeroUnit);