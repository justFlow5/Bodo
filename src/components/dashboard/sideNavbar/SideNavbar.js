import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../mediaQueries/media';

import Datalist from '../../forms/Datalist';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { sortAlpha, sortASC, sortDESC } from './helperFunctions';

import SortContainer from './SortContainer';
import EditButton from './EditButton';
import SideNavbarItem from './SideNavbarItem';

const SideNavbar = styled.div`
  position: fixed;
  right: 0;
  z-index: 3;
  top: 0px;
  bottom: 0;
  width: 100%;
  background: #07274c;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.3s;
  & .simplebar-scrollbar:before {
    background: #a3aefb;
  }
  & .simplebar-scrollbar {
    height: 150px !important;
  }
  @media ${device.laptop} {
    width: 210px;
  }
`;

const SideNavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-top: 20px;
  @media ${device.laptop} {
    margin-top: 200px;
    margin-top: 20px;
  }
`;

const EditButtonContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
`;

const SideNavbarComponent = ({
  open,
  editMode,
  numOfTech,
  handleLeaveEditMode,
  handleEdit,
  setCategory,
}) => {
  const [sortType, setSortType] = useState(
    localStorage.getItem('sortType') || 'alpha'
  );

  const sortTech = (arr, sortType) => {
    if (sortType === 'alpha') {
      localStorage.setItem(`sortType`, 'alpha');
      return sortAlpha(arr);
    } else if (sortType === 'desc') {
      localStorage.setItem(`sortType`, 'desc');
      return sortDESC(arr);
    } else if (sortType === 'asc') {
      localStorage.setItem(`sortType`, 'asc');
      return sortASC(arr);
    }
  };

  return (
    <SideNavbar open={open}>
      <Datalist technologies={numOfTech} setCategory={setCategory} />{' '}
      <SortContainer sortType={sortType} setSortType={setSortType} />
      <SideNavbarList>
        <SimpleBar
          style={{
            maxHeight: '300px',
          }}
        >
          {' '}
          {sortTech(numOfTech, sortType).map((category) => {
            console.log('CATEGORYYY: ', category);
            return (
              <SideNavbarItem
                setCategory={setCategory}
                categoryData={category}
              />
            );
          })}{' '}
        </SimpleBar>{' '}
      </SideNavbarList>{' '}
      <EditButtonContainer>
        <EditButton
          handleEdit={handleEdit}
          editMode={editMode}
          typeOfEdit="dataSave"
        />
        <EditButton
          handleLeaveEditMode={handleLeaveEditMode}
          editMode={editMode}
          typeOfEdit="editToggler"
        />
      </EditButtonContainer>{' '}
    </SideNavbar>
  );
};

export default SideNavbarComponent;
