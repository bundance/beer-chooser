
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Search from '../search/search.container';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const HeroUnit = ({ classes }) => (
    <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
            Find Beer for your Food
        </Typography>
        <Typography variant="title" align="center" color="textSecondary" paragraph>
            Enter your food, and we'll show you what beers go with it
        </Typography>
        <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
            <Grid item>
                <Search />
            </Grid>
            </Grid>
        </div>
        </div>
    </div>
);

export default withStyles(styles)(HeroUnit);