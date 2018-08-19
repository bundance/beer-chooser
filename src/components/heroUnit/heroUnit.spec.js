import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { HeroUnit, styles } from './heroUnit.component';
import { LOADING } from '../../constants/store-keys/app.store-keys';

describe('HeroUnit component', () => {
    const classes = {
        hiddenSpinner: 'hiddenSpinner',
        spinner: 'spinner',
        greyedOut: 'greyedOut',
        heroContent: 'heroContent',
        heroUnit: 'heroUnit'
    };

    it('should be visible when loadingState is not LOADING', () => {
        const wrapper = shallow(<HeroUnit classes={ classes } loadingState="SUCCESS" />);
        expect(wrapper.find('div').at(1).hasClass('heroContent')).toEqual(true);
    });

    it('should be greyed out when loadingState is LOADING', () => {
        const wrapper = shallow(<HeroUnit classes={ classes } loadingState={ LOADING }/>);
        expect(wrapper.find('div').at(1).hasClass('greyedOut')).toEqual(true);
    });

    it('should not show a spinner when loadingState is not LOADING', () => {
        const wrapper = shallow(<HeroUnit classes={ classes } loadingState="SUCCESS" />);
        expect(wrapper.find('WithStyles(CircularProgress)').hasClass('hiddenSpinner')).toEqual(true);
    });

    it('should show a spinner when loadingState is LOADING', () => {
        const wrapper = shallow(<HeroUnit classes={ classes } loadingState={ LOADING }/>);
        expect(wrapper.find('WithStyles(CircularProgress)').hasClass('spinner')).toEqual(true);
    });
});

