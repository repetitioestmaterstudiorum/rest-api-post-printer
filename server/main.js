import { Meteor } from "meteor/meteor";
import "../imports/api/request-storage.js";
import bodyParser from "body-parser";
import { logStuff, insertARequest } from "../imports/api/request-storage.js";

// For requests with content-type JSON:
WebApp.connectHandlers.use("/api", bodyParser.json());
// For requests with content-type application/x-www-form-urlencoded
WebApp.connectHandlers.use("/api", bodyParser.urlencoded({ extended: true }));
// Then your handler:
WebApp.connectHandlers.use("/api", (req, res) => {
  Meteor.call("insertRequest", req.body);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ status: "ok", received: req.body }));
});

Meteor.startup(() => {
  // code to run on server at startup
});
