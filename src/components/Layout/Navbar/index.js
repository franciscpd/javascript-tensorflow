import React, { useState, useEffect } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { Navbar as NavBase, Icon, Dropdown } from 'rsuite';
import Nav from '@rsuite/responsive-nav';
import routes from '@shared/data/routes';

const CustomLink = React.forwardRef((props, ref) => (
  // @ts-ignore
  <Link className="rs-nav-item-content" ref={ref} {...props} />
));

const NavLink = props => <Nav.Item componentClass={CustomLink} {...props} />;

const Navbar = props => {
  const [activeKey, setActiveKey] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => setActiveKey(location.pathname), [location.pathname]);

  return (
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
        <Nav activeKey={activeKey}>
          {routes.map((route, idx) => {
            if (route.children) {
              return (
                <Dropdown title={route.label} key={idx}>
                  {route.children.map((r, i) => (
                    <Dropdown.Item
                      key={i}
                      onSelect={() => history.push(`${route.path}${r.path}`)}
                      eventKey={`${route.path}${r.path}`}
                    >
                      {r.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              );
            }
            // @ts-ignore
            return (
              <NavLink
                // @ts-ignore
                icon={route.icon ? <Icon icon={route.icon} /> : null}
                to={route.path}
                key={idx}
                eventKey={route.path}
              >
                {route.label}
              </NavLink>
            );
          })}
        </Nav>
      </NavBase.Body>
    </NavBase>
  );
};

export default Navbar;
