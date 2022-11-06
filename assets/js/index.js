const routes = {
  404: {
    title: "404",
    template: "/views/404.html",
    Description: "404 Page Not Found",
  },
  "/": {
    title: "Home",
    template: "/views/home.html",
    Description: "This is the Home Page",
  },
  "/about": {
    title: "About",
    template: "/views/about.html",
    Description: "This is the about Page",
  },
  "/contact": {
    title: "Contact",
    template: "/views/contact.html",
    Description: "This is the Contact Page",
  },
};

// EventListeners
document.addEventListener("click", (event) => {
  if (!event.target.matches("nav a")) {
    return;
  }
  event.preventDefault();
  window.route(e);
});

// Functions
async function handleUrlLocation() {
  let location = window.location.pathname;
  if (location === "/index.html" || location.length == 0) {
    location = "/";
  }
  console.log("handleUrlLocation", location);
  const route = routes[location] || routes[404];
  console.log(route.template);
  const html = await fetch(route.template).then((res) => res.text);
  console.log(html);
}

window.route = (e = window.event) => {
  e.preventDefault();
  window.history.pushState({}, "", e.target.href);
  handleUrlLocation();
};
window.onpopstate = handleUrlLocation;
handleUrlLocation();
