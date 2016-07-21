import React, { PropTypes } from 'react';

import Container from './Container';


const SubNavListItem = ({item}) => (
  <div className="nav-item icon-group">
    <span className={`icon ${item.icon}`}></span>
    <span>{ item.name }</span>
  </div>
);
SubNavListItem.propTypes = {
  item: PropTypes.object.isRequired
};


const SubNavList = ({navItems}) => (
  <ul className="sub-nav-list">
    {
      navItems.map((item, index) => <SubNavListItem item={item} key={index} />)
    }
  </ul>
);
SubNavList.propTypes = {
  navItems: PropTypes.array.isRequired
};


const SubNav = ({title, message, navItems}) => (
  <nav className="sub-nav">
    <Container>
      <div className="nav-left">
        <h1>{ title }</h1>
        <span>{message}</span>
      </div>
      <div className="nav-right">
        <SubNavList navItems={navItems} />
      </div>
    </Container>
  </nav>
);
SubNav.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired
};


export default SubNav;
