import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Requests } from "../api/request-storage.js";

import "./body.html";

// do stuff once file loads (onCreated)
Template.body.onCreated(function () {
  // get tasks (subscribe to tasks.js in the api)
  Meteor.subscribe("requests");
});

// "global" function to stringify an object
Template.registerHelper("parseJson", function (object) {
  return JSON.stringify(object);
});

Template.body.helpers({
  getRequests() {
    return Requests.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  "click .removeAll"(event) {
    Meteor.call("removeAllRequests");
  },
});
