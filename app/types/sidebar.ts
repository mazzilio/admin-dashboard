export type SideBarMenuItems = {
	title: string;
	list: SideBarMenuItemDetails[];
};

export type SideBarMenuItemDetails = {
	title: string;
	path: string;
	icon: React.JSX.Element;
};
