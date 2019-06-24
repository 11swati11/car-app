import React from "react";
import { NavLink } from "react-router-dom";

import { H2, Paragraph } from "../styles/common";
import { List, ListItem, ListItemImg, ListItemText } from '../styles/List';
import Loader from "./helpers/Loader";

const renderCars = (props) => {
    let carLIs = props.list.map(car => {
        return <ListItem key={car.stockNumber}>
            <ListItemImg className="img"></ListItemImg>
            <ListItemText>
                <H2>{`${car.manufacturerName} ${car.modelName}`}</H2>
                <Paragraph>
                    Stock # {car.stockNumber} - {`${car.mileage.number} ${car.mileage.unit}`} - {car.fuelType} - {car.color}
                </Paragraph>
                <NavLink to={`/carDetails/${car.stockNumber}`}>View Details</NavLink>
            </ListItemText>
        </ListItem>
    })
    return <List>{carLIs}</List>;
};

const CarList = (props) => {
    return (
        <React.Fragment>
            {props.loading ? <Loader/> : renderCars(props)}
        </React.Fragment>
    )

}


export default CarList;