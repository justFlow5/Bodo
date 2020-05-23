import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../../mediaQueries/media';

import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SortASC from '../../../images/dashboard/sortASC';
import SortDESC from '../../../images/dashboard/sortDESC';

const SortContainer = styled.div`
  margin: 5px;
  width: 100%;
  position: relative;
  text-align: right;
`;
const SortList = styled.ul`
  position: relative;

  display: inline-block;

  justify-content: flex-end;
  align-items: center;

  margin-right: 12%;

  @media ${device.laptop} {
    margin-right: 15px;
  }
`;

const SortItem = styled.li`
  display: inline-block;
  margin: 0 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover > svg {
    fill: white;
  }

  &:nth-child(2) {
    width: 25px;
    height: 25px;
    position: relative;
    top: 5px;
  }

  &.active > svg {
    fill: white;
  }

  & svg {
    fill: #a3aefb;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
`;

const SortContainerComponent = ({ sortType, setSortType }) => {
  return (
    <SortContainer>
      <SortList>
        <SortItem
          className={sortType === 'asc' ? 'active' : null}
          title="numeric ascending order"
          onClick={() => {
            setSortType('asc');
          }}
        >
          <SortASC />
        </SortItem>{' '}
        <SortItem
          className={sortType === 'alpha' ? 'active' : null}
          title="alphabetic order"
          onClick={() => {
            setSortType('alpha');
          }}
        >
          <SortByAlphaIcon />
        </SortItem>{' '}
        <SortItem
          className={sortType === 'desc' ? 'active' : null}
          title="numeric descending order"
          onClick={() => {
            setSortType('desc');
          }}
        >
          <SortDESC />
        </SortItem>{' '}
      </SortList>{' '}
    </SortContainer>
  );
};

export default SortContainerComponent;
