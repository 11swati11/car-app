import React from "react";
import PropTypes from 'prop-types';

import LoadingList from "./helpers/LoadingList";
import CarListItem from "./CarListItem";

import { List} from '../styles/List';


const renderCars = (props) => {
    let carLIs = props.list.map(car => {
        return <CarListItem car={car} key={car.stockNumber} />;
    })
    return <List>{carLIs}</List>;
};

const CarList = (props) => {
    return (
        <React.Fragment>
            {props.loading ? <LoadingList listItemCount={10}/> : renderCars(props)}
        </React.Fragment>
    )
}

CarList.prototypes = {
    loading: PropTypes.bool,
    list: PropTypes.array
}

export default CarList;