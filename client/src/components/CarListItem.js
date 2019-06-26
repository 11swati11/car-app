import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { H2, Img, Paragraph } from "../styles/CommonStyles";
import { ListItem, ListItemImg, ListItemText } from '../styles/List';

const CarListItem = (props) => {
    let car = props.car;
    return (
        <ListItem>
            <ListItemImg className="img"><Img alt={car.manufacturerName} src={car.pictureUrl} /></ListItemImg>
            <ListItemText>
                <H2>{`${car.manufacturerName} ${car.modelName}`}</H2>
                <Paragraph>
                    Stock # {car.stockNumber} - {`${car.mileage.number} ${car.mileage.unit}`} - {car.fuelType} - {car.color}
                </Paragraph>
                <NavLink to={`/carDetails/${car.stockNumber}`}>View Details</NavLink>
            </ListItemText>
        </ListItem>
    )
}

CarListItem.propTypes = {
    car: PropTypes.object.isRequired
}

export default CarListItem;