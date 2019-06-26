import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import CarList from '../CarList';
import carsdata from '../../__mocks__/carsData';

Enzyme.configure({ adapter: new Adapter() });

describe('<CarList />', () => {

 const props = {
   list: carsdata.cars,
   loading: false
 };

 describe('render()', () => {
   it('should have a UL element', () => {
     const wrapper = shallow(<CarList {...props} />);
     expect(wrapper.exists()).toBe(true);
     expect(wrapper.find('UlList')).toHaveLength(1);
   });

   it('should renders correct number of list items', () => {
     const wrapper = shallow(<CarList {...props} />);
     expect(wrapper.exists()).toBe(true);
     expect(wrapper.find('UlList').children()).toHaveLength(carsdata.cars.length);
   });
 });
});