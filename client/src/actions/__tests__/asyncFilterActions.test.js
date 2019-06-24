import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as filterActions from "../filterActions";
import * as actionsTypes from "../actionTypes";
import manufacturerData from "../../__mocks__/manufacturerData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const colorList = ["red", "blue", "green", "black", "yellow", "white", "silver"];

// Test Case : Manufacturer Data
test("Retrieve Manufacturer Data", async () => {

  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: manufacturerData })
  );

  const expectedActions = [
    { type: actionsTypes.FETCH_MANUFACTURE },
    { type: actionsTypes.FETCH_MANUFACTURE_SUCCESS, payload: { data: manufacturerData } }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(filterActions.requestManufacture());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

// Test Case : Color Data
test("Retrieve Color Data", async () => {

  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
});

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: colorList })
  );

  const expectedActions = [
    { type: actionsTypes.FETCH_COLORLIST },
    { type: actionsTypes.FETCH_COLORLIST_SUCCESS, payload: { data: colorList } }
  ];

  // Using async/await here instead of the 'then' cuz its cleaner
  await store.dispatch(filterActions.requestColorList());

  // ASSERTIONS / EXPECTS
  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.get).toHaveBeenCalledTimes(2);
});
