import { createAction } from 'redux-actions';
import { ON_SEARCH } from '../../constants/actions/search.actions';

export const onSearch = createAction(ON_SEARCH);