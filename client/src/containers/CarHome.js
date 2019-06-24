import React, { Component } from "react";
import { connect } from 'react-redux';

import * as filterActions from '../actions/filterActions';
import { requestCarList } from "../actions/carListAction";
import DropdownCustom from '../components/helpers/Dropdown';

import CarList from "../components/CarList";
import Pagination from "../components/helpers/Pagination";

import { H2, PageContainer, PageSidebar, PageContent, Paragraph, Button } from "../styles/common";
import { FilterSection, FilterForm } from "../styles/FilterForm";
import {CarListHeader} from "../styles/List";

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
        this.props.requestCarList();
    }


    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.filters) === JSON.stringify(prevProps.filters)) {
            return false;
        }
        this.props.requestCarList(this.props.filters)
        console.log(prevProps)
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

    render() {
        return (
            <PageContainer>
                <PageSidebar>
                    <FilterSection>
                        <FilterForm onSubmit={this.handleFilterSubmit}>
                            <DropdownCustom
                                labelName="Color"
                                title="All car colors"
                                name="color"
                                list={this.props.colorList}
                                clickHandler={this.setFilters}
                            />
                            <DropdownCustom
                                labelName="Manufacturer"
                                title="All manufacturers"
                                name="manufacturer"
                                list={this.props.manufactureList}
                                clickHandler={this.setFilters}
                            />
                            <Button type="submit">Filter</Button>
                        </FilterForm>
                    </FilterSection>
                </PageSidebar>
                <PageContent>
                    <CarListHeader>
                        <H2>
                            Available cars
                            <Paragraph textLg>Showing 10 of 100 results</Paragraph>
                        </H2>
                        <DropdownCustom
                            labelName="Sort By"
                            title="None"
                            name="sort"
                            list={['Mileage - Ascending', 'Mileage - Descending']}
                            clickHandler={this.handleSortOrder}
                        />
                    </CarListHeader>
                    <CarList loading={this.props.isLoading} list={this.props.carList} />
                    <Pagination  clickHandler={this.handlePagination} pageCount={this.props.totalPages} currentPage={this.props.filters.page} />
                </PageContent>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.cars.noOfPages)
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



export default connect(mapStateToProps, mapDispatchToProps)(CarHome);

