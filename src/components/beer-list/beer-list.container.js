import { connect } from 'react-redux';
import { getBeers } from '../../state/beer/beer.selectors';
import BeerList from './beer-list.component';

const mapStateToProps = state => ({
    beers: getBeers(state)
});


export default connect(mapStateToProps)(BeerList);