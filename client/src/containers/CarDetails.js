import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { requestCarDetails } from '../actions/carDetailsAction';
import { markFavourite, markUnFavourite } from '../actions/userPreferenceActions';
import NotFound from '../components/NotFound';

import { H2, Img, PageContainer, PageSidebar, PageContent, PageBanner, Paragraph, Button, Widget } from "../styles/CommonStyles";
class CarDetails extends Component {
    componentDidMount() {
        let { id } = this.props.match.params;
        if (!this.props.details[id]) {
            this.props.requestCarDetails(id);
        }
    }

    handleFavourites = (id) => {
        let { userFavourites } = this.props;
        if (userFavourites.indexOf(id) < 0) {
            this.props.markFavourite(id)
        }
        else {
            this.props.markUnFavourite(id)
        }
    }
    render() {
        let { id } = this.props.match.params;
        let { details, userFavourites, isLoading } = this.props;
        let carDetails = details[id];

        if (isLoading) {
            return (<div>Loading....</div>)
        }
        if (!carDetails) {
            return (<NotFound />)
        }
        return (
            <Fragment>
                <PageBanner>
                    <Img alt={carDetails.manufacturerName} src={carDetails.pictureUrl} />
                </PageBanner>
                <PageContainer data-pagename="page-details">
                    <PageContent>
                        <NavLink to="/"> &lt; Back to List</NavLink>
                        <H2>{carDetails.manufacturerName} - {carDetails.modelName}</H2>
                        <Paragraph textLg>Stock #{carDetails.stockNumber} - {carDetails.mileage.number} {(carDetails.mileage.unit).toUpperCase()} - {carDetails.fuelType} - {carDetails.color}</Paragraph>
                        <Paragraph>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in   this page are not definitive and may change due to bad weather conditions.</Paragraph>
                    </PageContent>
                    <PageSidebar>
                        <Widget>
                            <Paragraph> If you like this car, click the button and save it in your collection of favourite items.</Paragraph>
                            <Button onClick={() => this.handleFavourites(id)}>{userFavourites.indexOf(id) >= 0 ? "Saved" : "Save"}</Button>
                        </Widget>
                    </PageSidebar>
                </PageContainer>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userFavourites: state.userPref.favourites,
        details: state.selectedCars.carDetails,
        isLoading: state.selectedCars.isLoading,
    }
}

CarDetails.propTypes = {
    userFavourites: PropTypes.array,
    details: PropTypes.object,
    isLoading: PropTypes.bool,
}

export default connect(mapStateToProps, { requestCarDetails, markFavourite, markUnFavourite })(CarDetails);