import React, { Component } from 'react'
import { Dropdown, DropdownLabel, DropdownToggle, DropdownToggleIcon, DropdownList, DropdownItem } from "../../styles/Dropdown"

class DropdownCustom extends Component {
   constructor(props) {
       super(props)
       this.state = {
           listOpen: false,
           labelName: this.props.labelName,
           headerTitle: this.props.title,
           selectedValue: this.props.value
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

   selectItem(name, val, title) {
       this.setState({
           headerTitle: title,
           listOpen: false,
           selectedValue: val
       }, this.props.clickHandler(name, val))
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
                       ? <DropdownToggleIcon name="angle-up" />
                       : <DropdownToggleIcon name="angle-down" />
                   }
               </DropdownToggle>
               {listOpen && <DropdownList onClick={e => e.stopPropagation()}>

                   {list.map((item, i) => (
                       <DropdownItem key={i} className={item.value === this.state.selectedValue ? "active" : ""}
                           onClick={() => this.selectItem(name, item.value, item.title)}>
                           {item.title}
                       </DropdownItem>
                   ))}
               </DropdownList>}
           </Dropdown>
       )
   }
}

export default DropdownCustom