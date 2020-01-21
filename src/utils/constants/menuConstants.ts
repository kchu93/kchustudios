export interface SubMenuInterface {
  title: string;
  path: string;
}

export interface MenuItemInterface {
  title: string;
  path: string;
  subMenu?: SubMenuInterface;
}

export const menuItems: MenuItemInterface[] = [
    {
        title: "Photography",
        path: "/photography"
    },
    {
        title: "Mood Board",
        path: "/mood-board"
    },
    {
        title: 'Journal',
        path: '/journal',
    },
    {
        title: "Audio",
        path: "/audio"
    },
    {
        title: "About",
        path: "/audio"
    }
];
