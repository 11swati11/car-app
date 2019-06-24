import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import filterReducer from "./filterReducer";
import colorReducer from './colorReducer';
import manufacturerReducer from './manufactureReducer';

export default combineReducers({
    cars: carsReducer,
    filters: filterReducer,
    manufacturer: manufacturerReducer,
    colors: colorReducer,
})

// {/*
//     {
//         cars: {
//             byId: {
//                 "car1": {},
//                 "car2": {},
//                 "car3": {},
//                 "car4": {},
//             },
//             allIds: ["car1", "car2", "car3", "car4"]
//         },
//         selectedCar: []
//         filter: {
//             byId: {
//                 "color": {},
//                 "manufacturer": {}
//             }
//         },
//         sort: {
//             byId: {
//                 "mileage": {}
//             }
//         },
//         favourite: {

//         }
//         loading: false
//     }
// */}