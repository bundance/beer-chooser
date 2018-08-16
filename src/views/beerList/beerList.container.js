import { connect } from 'react-redux';
import { selectBeers } from '../../state/beer/beer.selectors';
import { BeerList } from './beerList.component';

const mapStateToProps = state => ({
    beers: selectBeers(state)
});


export default connect(mapStateToProps)(BeerList);