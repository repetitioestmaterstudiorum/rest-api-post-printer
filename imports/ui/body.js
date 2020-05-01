import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Requests } from "../api/request-storage.js";

import "./body.html";
import "./request.js";

// do stuff once file loads (onCreated)
Template.body.onCreated(function () {
  // get tasks (subscribe to tasks.js in the api)
  Meteor.subscribe("requests");
});

Template.body.helpers({
  requests() {
    return Requests.find({}, { sort: { createdAt: -1 } });
  },
  absoluteUrl() {
    return Meteor.absoluteUrl();
  },
});

Template.body.events({
  "click .removeAll"(event) {
    Meteor.call("removeAllRequests");
  },
});
