import { Meteor } from "meteor/meteor";
import bodyParser from "body-parser";

// For requests with content-type JSON:
WebApp.connectHandlers.use("/", bodyParser.json());
// For requests with content-type application/x-www-form-urlencoded
WebApp.connectHandlers.use("/", bodyParser.urlencoded({ extended: true }));
// Then your handler:
WebApp.connectHandlers.use("/", (req, res) => {
  // API.handleRequest(res, req);
  console.log(req.body); // for now
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ status: "ok", received: req.body }));
});

Meteor.startup(() => {
  // code to run on server at startup
});
