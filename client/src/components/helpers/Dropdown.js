import React, { Component } from 'react'
import styled from "styled-components";
import { Dropdown, DropdownLabel, DropdownToggle, DropdownList, DropdownItem } from "../../styles/Dropdown"

const Icon = styled.i`
    content:"&#9660;";

`;

class DropdownCustom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            labelName: this.props.labelName,
            headerTitle: this.props.title,
        }
        this.close = this.close.bind(this)
    }

    componentDidUpdate() {
        const { listOpen } = this.state
        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', this.close)
            }
            else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.close)
    }

    close(timeOut) {
        this.setState({
            listOpen: false
        })
    }

    selectItem(title, val) {
        this.setState({
            headerTitle: val,
            listOpen: false
        }, this.props.clickHandler(title, val))
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const { list, name } = this.props
        const { listOpen, headerTitle, labelName } = this.state
        return (
            <Dropdown>
                {labelName && <DropdownLabel>{labelName}</DropdownLabel>}                
                <DropdownToggle type="button" onClick={() => this.toggleList()}>{headerTitle}
                    {listOpen
                        ? <Icon name="angle-up" />
                        : <Icon name="angle-down" />
                    }
                </DropdownToggle>
                {listOpen && <DropdownList onClick={e => e.stopPropagation()}>
                    {list.map((item, i) => (
                        <DropdownItem key={i}
                            onClick={() => this.selectItem(name, item)}>
                            {item}
                        </DropdownItem>
                    ))}
                </DropdownList>}
            </Dropdown>
        )
    }
}

export default DropdownCustom
