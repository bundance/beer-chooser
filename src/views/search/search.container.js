import { connect } from 'react-redux';
import { onSearch } from '../../state/search/search.actions';
import Search from './search.component';

const mapStateToProps = undefined;
const mapDispatchToProps = ({
    onSearch
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);