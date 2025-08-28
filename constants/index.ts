export const NAV_LINKS = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "dashboard",
          url: "/dashboard",
          roles: ["user"],
        },
        {
          title: "Users",
          url: "/users",
          roles: ["user"],
        },
        {
          title: "Todo",
          url: "/todo",
          roles: ["user", "admin"],
        },
      ],
    },
    {
      title: "admin",
      url: "/admin",
      roles: ["user", "admin"],
      items: [],
    },
  ],
};

export const IMAGES = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
