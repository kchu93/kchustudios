import React, { Component, createContext } from 'react';

interface MenuProviderProps {
    children: JSX.Element | Element | string;
}

interface MenuProviderState {
    props: any;
    menuOpen: boolean;
    showMenu(): void;
    hideMenu(): void;
}

const MenuContext = createContext({
    props: {},
    menuOpen: false,
    showMenu: () => {},
    hideMenu: () => {}
});

export class MenuProvider extends Component<MenuProviderProps, MenuProviderState> {
    showMenu = () => {
        this.setState({ menuOpen: true });
    };

    hideModal = () =>
        this.setState({ menuOpen: false });

    readonly state: MenuProviderState = {
        props: {},
        menuOpen: false,
        showMenu: this.showMenu,
        hideMenu: this.hideModal
    };

    render() {
        return (
            <MenuContext.Provider value={this.state}>
                {this.props.children}
            </MenuContext.Provider>
        );
    }
}

export const MenuConsumer = MenuContext.Consumer;
