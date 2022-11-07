const ROUTES = {
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
const CONTENT = document.querySelector(".content");
document.addEventListener("click", (event) => {
  if (!event.target.matches("nav a")) {
    return;
  }
  event.preventDefault();
  window.route(event);
});

// Functions
async function handleUrlLocation() {
  let location = window.location.pathname;
  if (
    location === "/home" ||
    location === "/index.html" ||
    location.length == 0
  ) {
    location = "/";
  }
  const route = ROUTES[location] || ROUTES[404];
  const html = await fetch(route.template)
    .then((res) => res.text())
    .catch((err) => {
      console.error("Failed to fetch Template. reason:", err);
    });
  CONTENT.innerHTML = html;
}

window.route = (e = window.event) => {
  e.preventDefault();
  handleUrlLocation();
  window.history.pushState({}, "", e.target.href);
};
window.onpopstate = handleUrlLocation;
