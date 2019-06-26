import React, { Component } from 'react';
import { PaginationList, PaginationItem, PaginationStatus } from '../../styles/Pagination';

export default class Pagination extends Component {
    handlePageClick = (e) => {
        let { currentPage, pageCount } = this.props;
        switch (e.target.dataset.role) {
            case "First":
                this.props.clickHandler(1);
                break;
            case "Prev":
                this.props.clickHandler(currentPage - 1);
                break;
            case "Next":
                this.props.clickHandler(currentPage + 1);
                break;
            case "Last":
                this.props.clickHandler(pageCount);
                break;
            default:
                this.props.clickHandler(1);
        }

    }
    render() {
        let { currentPage, pageCount } = this.props;
        return (
                <PaginationList>
                    <PaginationItem onClick={this.handlePageClick} data-role="First" disabled={currentPage === 1}>First</PaginationItem>
                    <PaginationItem onClick={this.handlePageClick} data-role="Previous" disabled={currentPage === 1}>Prev</PaginationItem>
                    <PaginationStatus>{`Page ${currentPage} of ${pageCount}`}</PaginationStatus>
                    <PaginationItem onClick={this.handlePageClick} data-role="Next" disabled={currentPage === pageCount}>Next</PaginationItem>
                    <PaginationItem onClick={this.handlePageClick} data-role="Last" disabled={currentPage === pageCount}>Last</PaginationItem>
                </PaginationList>                
        )
    }
}