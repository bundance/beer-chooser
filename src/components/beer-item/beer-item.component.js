import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
        maxWidth: 345
    }
});

function BeerItem({ beer, classes, theme}) {
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {beer.name}
                    </Typography>
                    <Typography component="p">
                        {beer.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

BeerItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    beer: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(BeerItem);