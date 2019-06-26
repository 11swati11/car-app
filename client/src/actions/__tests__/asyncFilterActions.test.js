import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as filterActions from "../filterActions";
import * as actionsTypes from "../actionTypes";
import manufacturerData from "../../__mocks__/manufacturerData";
import colorData from "../../__mocks__/colorListData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();


describe('Asynchronous call to Manufacturer data', () => {
 // Test Case : Manufacturer Data
 test("Retrieve Manufacturer Data", async () => {
   beforeEach(() => { // Runs before each test in the suite
     store.clearActions();
   });

   mockAxios.get.mockImplementationOnce(() =>
     Promise.resolve({ data: manufacturerData })
   );

   let selectableManufacturers = manufacturerData.manufacturers.map((item) => {
     return { title: item.name, value: item.name }
   });
   selectableManufacturers = [{ title: "All Manufacturer", value: "" }, ...selectableManufacturers]

   const expectedActions = [
     { type: actionsTypes.FETCH_MANUFACTURE },
     { type: actionsTypes.FETCH_MANUFACTURE_SUCCESS, payload: selectableManufacturers }
   ];

   // Using async/await here instead of the 'then' cuz its cleaner
   await store.dispatch(filterActions.requestManufacture());

   // ASSERTIONS / EXPECTS
   expect(store.getActions()).toEqual(expectedActions);
   expect(mockAxios.get).toHaveBeenCalledTimes(1);
 });
})

describe('Asynchronous call to Color data', () => {
 // Test Case : Color Data
 test("Retrieve Color Data", async () => {
   beforeEach(() => { // Runs before each test in the suite
     store.clearActions();
   });

   mockAxios.get.mockImplementationOnce(() =>
     Promise.resolve({ data: colorData })
   );

   let selectableColorList = colorData.colors.map((item) => {
     return { title: item, value: item }
   });

   selectableColorList = [{ title: "All Colors", value: "" }, ...selectableColorList]

   const expectedActions = [
     { type: actionsTypes.FETCH_COLORLIST },
     { type: actionsTypes.FETCH_COLORLIST_SUCCESS, payload: selectableColorList }
   ];

   // Using async/await here instead of the 'then' cuz its cleaner
   await store.dispatch(filterActions.requestColorList());

   // ASSERTIONS / EXPECTS
   expect(store.getActions()).toEqual(expectedActions);
   expect(mockAxios.get).toHaveBeenCalledTimes(2);
 });

})