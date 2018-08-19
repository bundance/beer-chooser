import { connect } from 'react-redux';
import { getBeers } from '../../state/beer/beer.selectors';
import BeerList from './beerList.component';

const mapStateToProps = state => ({
    beers: getBeers(state)
});


export default connect(mapStateToProps)(BeerList);