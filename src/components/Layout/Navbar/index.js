/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as NavBase, Nav, Icon } from 'rsuite';

const Navbar = ({ onSelect, activeKey, ...props }) => (
  <NavBase {...props}>
    <NavBase.Header>
      <h5
        style={{
          padding: '15px 20px',
          display: 'inline-block',
        }}
      >
        Tensor Flow
      </h5>
    </NavBase.Header>
    <NavBase.Body>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
          Home
        </Nav.Item>
        <Nav.Item eventKey="2">News</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<Icon icon="cog" />}>Configurações</Nav.Item>
      </Nav>
    </NavBase.Body>
  </NavBase>
);

Navbar.propTypes = {
  onSelect: PropTypes.func,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navbar.defaultProps = {
  onSelect: () => {},
  activeKey: null,
};

export default Navbar;
