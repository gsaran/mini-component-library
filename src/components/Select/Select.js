import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const SelectWrapper = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: 2px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: fit-content;
  padding: 4px 8px;
  position: relative;
  font-size: 1rem;
  line-height: 1.5;

  &:hover {
    color: ${COLORS.black}
  }
`;

const StyledSelect = styled.select`
  /* hint from the course */
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  /* remove the original arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper tabIndex={0}>
      {displayedValue}
      <StyledSelect value={value} onChange={onChange}>
        {children} 
      </StyledSelect>
      <Icon id="chevron-down" size={20}/>
    </SelectWrapper>
  );
};

export default Select;
