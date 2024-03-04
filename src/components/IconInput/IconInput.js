import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    border: '1px',
    icon: 14,
    gap: 6
  },
  large: {
    border: '2px',
    icon: 20,
    gap: 12
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <InputWrapper style={{'--border-width': styles.border, '--gap': `${styles.gap}px`}}>
      <VisuallyHidden><label for="search-input">{label}</label></VisuallyHidden>
      <Icon id={icon} size={styles.icon}/>
      <Input id="search-input" placeholder={placeholder} style={{'--width': `${width}px`}}/>
    </InputWrapper>
  );
};

const Input = styled.input`
  border: none;
  width: var(--width);
  color: ${COLORS.gray700};
  font-weight: 700;
  -webkit-appearance: none;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: black;

    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
    }
  }

  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  border: 1px solid ${COLORS.black};
  border-width: 0 0 var(--border-width) 0;
  width: max-content;
  display: flex;
  align-items: center;
  gap: var(--gap);
  color: ${COLORS.gray700};

  &:has( > ${Input}:hover) {
    color: black;
  }

  &:has(> ${Input}:focus) {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default IconInput;
