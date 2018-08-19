import { connect } from 'react-redux';
import { getBeers } from '../../state/beer/beer.selectors';
import { selectLoadingState } from '../../state/app/app.selectors';
import Home from './home.component';

const mapStateToProps = state => ({
    beers: getBeers(state),
    loadingState: selectLoadingState(state)
});


export default connect(mapStateToProps)(Home);