import { Template } from "meteor/templating";
import { Requests } from "../api/request-storage.js";
import JSONFormatter from "json-formatter-js";
import "./request.html";

Template.request.onRendered(function () {
  const obj = Requests.findOne({ _id: this.data._id });
  const formatter = new JSONFormatter(obj.request);
  this.find(".data").appendChild(formatter.render());
});

Template.request.helpers({
  formatJson(object) {
    return JSON.stringify(object);
  },
});
