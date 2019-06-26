import * as actionType from '../actionTypes';
import * as filterActions from '../filterActions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe('Synchronous actions', () => {
   beforeEach(() => { // Runs before each test in the suite
       store.clearActions();
   });

   it('should create an action to set color', () => {
       const expectedAction = {
           type: actionType.SET_COLOR,
           name: "red"
       };
       store.dispatch(filterActions.setColor("red"));
       expect(store.getActions()).toEqual([expectedAction]);
   });

   it('should create an action to set Manufacturer', () => {
       const expectedAction = {
           type: actionType.SET_MANUFACTURER,
           name: "BMW"
       };
       store.dispatch(filterActions.setManufacturer("BMW"));
       expect(store.getActions()).toEqual([expectedAction]);
   });

   it('should create an action to set sort order', () => {
       const expectedAction = {
           type: actionType.SET_SORT_ORDER,
           order: "asc"
       };
       store.dispatch(filterActions.setOrder("asc"));
       expect(store.getActions()).toEqual([expectedAction]);
   });

   it('should create an action to set page number', () => {
       const expectedAction = {
           type: actionType.SET_PAGE_NO,
           number: 2
       };
       store.dispatch(filterActions.setPage(2));
       expect(store.getActions()).toEqual([expectedAction]);
   });

});