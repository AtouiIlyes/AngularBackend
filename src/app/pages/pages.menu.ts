export const PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'general.menu.dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            }
            ,
            {
                path: 'news',
                data: {
                    menu: {
                        title: 'News',
                        icon: 'ion-social-hackernews-outline',
                        selected: false,
                        expanded: false,
                        order: 500,
                    }
                },
                children: [
                    {
                        path: 'newslist',
                        data: {
                            menu: {
                                title: 'News list',
                                icon: 'ion-ios-list-outline'

                            }
                        }
                    }

                ]
            },

            {
                path: 'contact',
                data: {
                    menu: {
                        title: 'Message',
                        icon: 'ion-android-textsms',
                        selected: false,
                        expanded: false,
                        order: 500,
                    }
                },
                children: [
                    {
                        path: 'contactlist',
                        data: {
                            menu: {
                                title: 'Messages',
                                icon: 'ion-android-textsms'

                            }
                        }
                    }

                ]
            },
            {
                path: 'gestionpages',
                data: {
                    menu: {
                        title: 'Gestion Pages',
                        icon: 'ion-gear-a',
                        selected: false,
                        expanded: false,
                        order: 250,
                    }
                }
            },
            {
                path: 'components',
                data: {
                    menu: {
                        title: 'general.menu.components',
                        icon: 'ion-gear-a',
                        selected: false,
                        expanded: false,
                        order: 250,
                    }
                },
                children: [
                    {
                        path: 'treeview',
                        data: {
                            menu: {
                                title: 'general.menu.tree_view',
                            }
                        }
                    }
                ]
            }

        ]
    }
];
