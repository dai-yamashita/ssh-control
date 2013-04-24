/*global require, process, console */

var control = require('../'),
    shared = Object.create(control.controller),
    i, l, controller, controllers;

shared.user = process.env.USER;
controllers = control.controllers(['localhost', '127.0.0.1'], shared);

for (i = 0, l = controllers.length; i < l; i += 1) {
    controller = controllers[i];
    controller.ssh('date');
}




var control = require('./index'),
    controller = Object.create(control.controller, {address: {value:"127.0.0.1"}, user:{value: 'v'}});

controller.ssh("ls -l")

