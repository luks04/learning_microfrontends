import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@enel/module-main",
  app: () => System.import("@enel/module-main"),
  activeWhen: "/app",
});

registerApplication({
  name: "@enel/module-users",
  app: () => System.import("@enel/module-users"),
  activeWhen: "/users",
});

start({
  urlRerouteOnly: true,
});
