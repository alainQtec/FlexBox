const routes = {
  404: {
    title: "404",
    template: "views/404.html",
    Description: "404 Page Not Found",
  },
  "/": {
    title: "Home",
    template: "views/home.html",
    Description: "This is the Home Page",
  },
  "/about": {
    title: "About",
    template: "views/about.html",
    Description: "This is the about Page",
  },
  "/contact": {
    title: "Contact",
    template: "views/contact.html",
    Description: "This is the Contact Page",
  },
};
function handleUrlLocation() {
  const location = window.location.pathname;
  console.log("handleUrlLocation", location);
}
function urlRouter(e) {
  const event = e || window.event;
  event.preventDefault();
  console.log("urlRouter", event.target);
}

window.route = urlRouter;
window.onpopstate = handleUrlLocation;
handleUrlLocation();
