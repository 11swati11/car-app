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
        };
        store.dispatch(filterActions.setColor());
        expect(store.getActions()).toEqual([expectedAction]);
    });

    it('should create an action to set Manufacturer', () => {
        const expectedAction = {
            type: actionType.SET_MANUFACTURER,
        };
        store.dispatch(filterActions.setManufacturer());
        expect(store.getActions()).toEqual([expectedAction]);
    });

    it('should create an action to set sort order', () => {
        const expectedAction = {
            type: actionType.SET_SORT_ORDER,
        };
        store.dispatch(filterActions.setOrder());
        expect(store.getActions()).toEqual([expectedAction]);
    });

});
