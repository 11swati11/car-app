import React from "react";

import DropdownCustom from '../components/helpers/Dropdown';

import { Button } from '../styles/CommonStyles';
import { FilterFormWidget, FilterForm } from "../styles/FilterForm";

const FilterSection = (props) => {
   let { filterListData, filterOptionClick, onFilterSubmit, selectedFilters } = props;
   let { manufacturerList, colorList } = filterListData;
   let { manufacturer, color } = selectedFilters

   return (
       <FilterFormWidget>
           <FilterForm onSubmit={onFilterSubmit}>
               <DropdownCustom
                   labelName="Color"
                   name="color"
                   value={color}
                   list={colorList}
                   clickHandler={filterOptionClick}
               />
               <DropdownCustom
                   labelName="Manufacturer"
                   name="manufacturer"
                   value={manufacturer}
                   list={manufacturerList}
                   clickHandler={filterOptionClick}
               />
               <Button type="submit">Filter</Button>
           </FilterForm>
       </FilterFormWidget>
   )
}

export default FilterSection;