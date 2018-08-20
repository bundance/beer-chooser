import { connect } from 'react-redux';
import { getBeers } from '../../state/beer/beer.selectors';
import { selectLoadingState } from '../../state/app/app.selectors';
import App from './app.component';

const mapStateToProps = state => ({
    beers: getBeers(state),
    loadingState: selectLoadingState(state)
});


export default connect(mapStateToProps)(App);