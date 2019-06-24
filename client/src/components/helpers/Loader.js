import React from 'react';

import { H2, Paragraph, AnchorLink } from "../../styles/common";
import { ListItem, ListItemImg, ListItemText, ListLoader } from '../../styles/List';

const Loader = () => {
    return (
        <ListLoader>
            <ListItem>
                <ListItemImg className="img"></ListItemImg>
                <ListItemText>
                    <H2>&nbsp;</H2>
                    <Paragraph>
                        &nbsp;
                    </Paragraph>
                    <AnchorLink>&nbsp;</AnchorLink>
                </ListItemText>
            </ListItem>
        </ListLoader>
    )
}

export default Loader;