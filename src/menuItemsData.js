export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "services",
    submenu: [
      {
        title: "Mobile App",
        url: "mobile-app",
      },
      {
        title: "Web App",
        url: "web-app",
        submenu: [
          {
            title: "Custom",
            url: "custom-web-app",
          },
          {
            title: "Readymade website",
            url: "cms-readymade",
          },
        ],
      },
      {
        title: "Hire Us",
        url: "hire-us",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
];
