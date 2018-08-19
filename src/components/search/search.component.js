import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { POLISH_RED, WHITE } from '../../config/config';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 100
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 462
    },
    menu: {
        width: 200,
    },
    button: {
        color: WHITE,
        fontWeight: 'bold'
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    }
});
export class Search extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        loadingState: PropTypes.string.isRequired,
        onSearch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            food: ''
        }
    }

    handleSearch = clickEvent => this.props.onSearch(this.state.food);
    handleFoodInput = event => {
        console.log("******** event called");
        this.setState({ food: event.target.value });
    }
    render() {
        const { classes } = this.props;

        return ( 
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="with-placeholder"
                    label="Food"
                    placeholder="e.g. chicken"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleFoodInput}
                />
                <div className={classes.wrapper}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSearch}>
                        Search
                    </Button>
                </div>
            </form>
        )
    }
}

export default withStyles(styles)(Search);