const middleware = {};

middleware["auth"] = require("..\\src\\middleware\\auth.js");
middleware["auth"] = middleware["auth"].default || middleware["auth"];

middleware["meta"] = require("..\\src\\middleware\\meta.js");
middleware["meta"] = middleware["meta"].default || middleware["meta"];

export default middleware;
