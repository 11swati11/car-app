import React, { Component, Fragment } from 'react';
import { H2, PageContainer, PageSidebar, PageContent, PageBanner, Flex, Paragraph, Button, Widget } from "../styles/common";

class CarDetails extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <Fragment>
                <PageBanner></PageBanner>
                <PageContainer>
                    <PageContent>
                        <H2>Chrysler Crossfire</H2>
                        <Paragraph>Stock # 61184 - 152.263 KM - Petrol - Yellow</Paragraph>
                        <Paragraph>
                            This car is currently available and can be delivered as soon as
        tomorrow morning. Please be aware that delivery times shown in
        this page are not definitive and may change due to bad weather
        conditions.
                    </Paragraph>
                    </PageContent>
                    <PageSidebar>
                        <Widget>
                            <Paragraph> If you like this car, click the button and save it in your collection of favourite items.</Paragraph>
                            <Button>Save</Button>
                        </Widget>
                    </PageSidebar>
                </PageContainer>
            </Fragment>
        )
    }
}

export default CarDetails;