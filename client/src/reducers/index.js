import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import filterReducer from "./filterReducer";
import colorReducer from './colorReducer';
import manufacturerReducer from './manufactureReducer';
import carsDetailsReducer from './carDetailReducer';
import userPrefrenceReducer from './userPrefrenceReducer';

export default combineReducers({
    cars: carsReducer,
    filters: filterReducer,
    manufacturer: manufacturerReducer,
    colors: colorReducer,
    selectedCars: carsDetailsReducer,
    userPref: userPrefrenceReducer
})
