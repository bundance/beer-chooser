import { connect } from 'react-redux';
import { selectBeers } from './state/beer/beer.selectors';
import { App } from './App.component';

const mapStateToProps = state => ({
    beers: selectBeers(state)
});


export default connect(mapStateToProps)(App);