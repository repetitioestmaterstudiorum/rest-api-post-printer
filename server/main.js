import { Meteor } from "meteor/meteor";
import bodyParser from "body-parser";
import { Requests } from "../imports/api/request-storage.js";
const multer = require("multer");
const multerUpload = multer();

// For requests with content-type JSON:
WebApp.connectHandlers.use("/api", bodyParser.json());
// For requests with content-type application/x-www-form-urlencoded
WebApp.connectHandlers.use("/api", bodyParser.urlencoded({ extended: true }));
// Use Multer (for multi-form requests) with WebApp but none because there won't be any files
WebApp.connectHandlers.use("/api", multerUpload.none());
// Then your handler:
WebApp.connectHandlers.use("/api", (req, res) => {
  Meteor.call("insertRequest", { reqHeaders: req.headers, reqBody: req.body });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(
    JSON.stringify({
      status: "ok",
      received: { reqHeaders: req.headers, reqBody: req.body },
    })
  );
});

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.call("removeAllRequests");
  Requests.rawCollection().createIndex(
    { createdAt: 1 },
    { expireAfterSeconds: 3600 }
  );
});
