import React from 'react';
import { MenuConsumer } from './MenuContext';
import { Menu } from '../Menu';

const MenuRoot = () => (
    <MenuConsumer>
        {({ menuOpen, showMenu, hideMenu, props }) => (menuOpen &&
            <Menu {...props} hideMenu={hideMenu}/>
        )}
    </MenuConsumer>
);

export default MenuRoot;
