import React from 'react';
import PropTypes from 'prop-types';

import { H2, Paragraph, AnchorLink } from "../../styles/CommonStyles";
import { ListItem, ListItemImg, ListItemText, ListLoader } from '../../styles/List';

const renderLoadingList = (props) => {
    const n = props.listItemCount;
    let loadingLIs = [...Array(n)].map((e, i) => {
        return <ListItem key={i}>
            <ListItemImg className="img"></ListItemImg>
            <ListItemText>
                <H2>&nbsp;</H2>
                <Paragraph>
                    &nbsp;
            </Paragraph>
                <AnchorLink>&nbsp;</AnchorLink>
            </ListItemText>
        </ListItem>;
    })
    return <ListLoader>{loadingLIs}</ListLoader>;
};

const LoadingList = (props) => {
    return renderLoadingList(props);
}

LoadingList.prototypes = {
    listItemCount: PropTypes.number,
}

export default LoadingList;