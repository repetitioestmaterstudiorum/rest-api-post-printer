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

Template.body.onRendered(function () {
  // display app url for post info
  this.find(".url").innerHTML = window.location.href;
});

Template.body.helpers({
  requests() {
    return Requests.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  "click .removeAll"(event) {
    Meteor.call("removeAllRequests");
  },
});
