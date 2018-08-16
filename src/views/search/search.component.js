import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});
class Search extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            food: ''
        }
    }

    handleSearch = clickEvent => this.props.onSearch(this.state.food);
    handleFoodInput = event => this.setState({ food: event.target.value });

    render() {
        const { classes } = this.props;

        return ( 
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="with-placeholder"
                    label="Food Type"
                    placeholder="Food Type"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleFoodInput}
                />
                <Button variant="contained" color="primary" onClick={this.handleSearch}>
                    Fetch Beer
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(Search);