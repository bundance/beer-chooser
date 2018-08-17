import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
        body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
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

const BeerList = ({ beers, classes }) => {
    console.log({ beers });
    return (
    <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableRow>
            <CustomTableCell></CustomTableCell>
            <CustomTableCell>Beer Name</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>First Brewed</CustomTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {beers.map(beer => {
            return (
                <TableRow className={classes.row} key={beer.id}>
                <CustomTableCell component="th" scope="row">
                    <img className={classes.img} src={beer.image_url} alt={beer.tagline} />
                </CustomTableCell>
                <CustomTableCell>{beer.name}</CustomTableCell>
                <CustomTableCell>{beer.tagline}</CustomTableCell>
                <CustomTableCell>{beer.first_brewed}</CustomTableCell>
                </TableRow>
            );
            })}
        </TableBody>
        </Table>
    </Paper>
)};

BeerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerList);