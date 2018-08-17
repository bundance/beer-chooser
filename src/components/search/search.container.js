import { connect } from 'react-redux';
import { onSearch } from '../../state/search/search.actions';
import { selectLoadingState } from '../../state/app/app.selectors';
import Search from './search.component';

const mapStateToProps = state => ({ loadingState: selectLoadingState(state) });

const mapDispatchToProps = ({
    onSearch
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);