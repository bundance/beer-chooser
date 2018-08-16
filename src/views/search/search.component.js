import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Search extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    }

    handleSearch = clickEvent => this.props.onSearch('searchTerm');

    render() {
        return (    
            <Button variant="contained" color="primary" onClick={this.handleSearch}>
                Hello World
            </Button>
        )
    }
}

export default Search;