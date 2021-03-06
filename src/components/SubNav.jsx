import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Container from './Container';


const SubNavListItem = ({item}) => (
  <div className="nav-item icon-group">
    <Link to={item.link || '#'}>
      <span className={`icon ${item.icon}`}></span>
      <span>{ item.name }</span>
    </Link>
  </div>
);
SubNavListItem.propTypes = {
  item: PropTypes.object.isRequired
};


const SubNavList = ({navItems}) => (
  <ul className="sub-nav-list">
    {
      navItems &&
      navItems.map((item, index) => <SubNavListItem item={item} key={index} />)
    }
  </ul>
);
SubNavList.propTypes = {
  navItems: PropTypes.array
};


const SubNav = ({title, message, navItems, titleLink}) => (
  <nav className="sub-nav">
    <Container>
      <div className="nav-left">
        {
          titleLink ?
          <Link to={titleLink}><h1>{ title }</h1></Link>
          : <h1>{ title }</h1>
        }
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
  titleLink: PropTypes.string,
  message: PropTypes.string.isRequired,
  navItems: PropTypes.array
};


export default SubNav;
