import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Search, styles } from './Search.component';
import { LOADING } from '../../constants/store-keys/app.store-keys';

describe('Search component', () => {
    const classes = {
        container: 'container',
        textField: 'textField',
        menu: 'menu',
        button: 'button',
        wrapper: 'wrapper'
    };

    let onSearch;
    
    beforeEach(() => {
        onSearch = jest.fn();
    });

    it('should call onSearch prop with the food value when clicked', () => {
        const wrapper = shallow(<Search classes={ classes } loadingState="SUCCESS" onSearch={ onSearch } />);
        wrapper.setState({ food:'fish' });
        wrapper.find('WithStyles(Button)').simulate('click');

        expect(onSearch.mock.calls.length).toBe(1);
        expect(onSearch.mock.calls[0][0]).toBe('fish');
    });
});
