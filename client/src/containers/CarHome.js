import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import * as filterActions from '../actions/filterActions';
import { requestCarList } from "../actions/carListAction";
import DropdownCustom from '../components/helpers/Dropdown';

import FilterSection from "../components/FilterSection";
import CarList from "../components/CarList";
import Pagination from "../components/helpers/Pagination";

import { H2, PageContainer, PageSidebar, PageContent, Paragraph } from "../styles/CommonStyles";
import { CarListHeader } from "../styles/List";
class CarHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturer: "",
            color: "",
        }
    }

    componentDidMount() {
        this.props.requestManufacture();
        this.props.requestColorList();
        this.props.requestCarList(this.props.filters);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.filters) === JSON.stringify(prevProps.filters)) {
            return false;
        }
        this.props.requestCarList(this.props.filters)
    }

    setFilters = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    handleSortOrder = (name, val) => {
        this.props.setOrder(val)
    }

    handlePagination = (pageNo) => {
        this.props.setPage(pageNo)
    }

    handleFilterSubmit = (e) => {
        e.preventDefault();
        let { manufacturer, color } = this.state;

        this.props.setPage(1);
        this.props.setColor(color);
        this.props.setManufacturer(manufacturer);
    }

    renderFilterSection = () => {
        let manufactureListData = this.props.manufactureList;
        let colorListData = this.props.colorList;
        let { manufacturer, color } = this.props.filters;
        return (
            <FilterSection
                filterListData={{ manufacturerList: manufactureListData, colorList: colorListData }}
                selectedFilters={{ manufacturer, color }}
                filterOptionClick={this.setFilters}
                onFilterSubmit={this.handleFilterSubmit}
            />
        )
    }

    renderCarListHeader = () => {
        let { sort } = this.props.filters;
        return (<CarListHeader>
            <H2>Available cars
                <Paragraph textLg>Showing 10 of 100 results</Paragraph>
            </H2>
            <DropdownCustom
                labelName="Sort By"
                title={sort ? sort : "None"}
                name="sort"
                value={sort}
                list={[{ title: "None", value: "" }, { title: "Mileage - Ascending", value: "Mileage - Ascending" }, { title: "Mileage - Descending", value: "Mileage - Descending" }]}
                clickHandler={this.handleSortOrder}
            />
        </CarListHeader>
        )
    }

    render() {
        return (
            <PageContainer>
                <PageSidebar>
                    {this.renderFilterSection()}
                </PageSidebar>
                <PageContent>
                    {this.renderCarListHeader()}
                    <CarList loading={this.props.isLoading} list={this.props.carList} />
                    <Pagination
                        clickHandler={this.handlePagination}
                        pageCount={this.props.totalPages}
                        currentPage={this.props.filters.page}
                    />
                </PageContent>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carList: state.cars.carList,
        isLoading: state.cars.isLoading,
        totalPages: state.cars.noOfPages,
        manufactureList: state.manufacturer.manufacturerList,
        colorList: state.colors.colorList,
        filters: state.filters,
    }
}

const mapDispatchToProps = {
    requestManufacture: filterActions.requestManufacture,
    requestColorList: filterActions.requestColorList,
    setColor: filterActions.setColor,
    setManufacturer: filterActions.setManufacturer,
    setPage: filterActions.setPage,
    setOrder: filterActions.setOrder,
    requestCarList,
}

CarHome.propTypes = {
    carList: PropTypes.array,
    isLoading: PropTypes.bool,
    totalPages: PropTypes.number,
    manufactureList: PropTypes.array,
    colorList: PropTypes.array,
    filters: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarHome);


