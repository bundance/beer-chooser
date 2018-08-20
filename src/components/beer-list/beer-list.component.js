import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BeerItemPopover from '../beer-item-popover/beer-item-popover.component';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.red,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    
    h3: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        padding: 10
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    img: {
        height: '50px'
    }
});

const BeerList = ({ beers, classes }) => (
    <Card>
        <CardContent>
            <Paper className={classes.root}>
                <h3 className={classes.h3} >Results (hover over image for full description)</h3>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.head}>
                        <CustomTableCell></CustomTableCell>
                        <CustomTableCell>Beer Name</CustomTableCell>
                        <CustomTableCell>Description</CustomTableCell>
                        <CustomTableCell>First Brewed</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {beers.map(((beer, index) => {
                        return (
                            <TableRow className={classes.row} key={index}>
                            {/* Note: using arrays index is a bad key,  
                                but beer.id is not guaranteed unique, and as we don't care about array
                                 order, it'll do for now */}
                                <CustomTableCell component="th" scope="row">
                                    <BeerItemPopover beer={ beer }>
                                        <img className={classes.img} src={beer.image_url} alt={beer.tagline} />
                                    </BeerItemPopover>
                                </CustomTableCell>
                                <CustomTableCell>{beer.name}</CustomTableCell>
                                <CustomTableCell>{beer.tagline}</CustomTableCell>
                                <CustomTableCell>{beer.first_brewed}</CustomTableCell>
                            </TableRow>
                        );
                    }))}
                </TableBody>
                </Table>
            </Paper>
        </CardContent>
    </Card>
);

BeerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerList);
