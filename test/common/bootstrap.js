global.IS_TEST_ENV = true;

// System Objects
global.cp = require('child_process');
global.events = require('events');
global.path = require('path');
global.stream = require('stream');
global.util = require('util');

global.Emitter = events.EventEmitter;
global.Duplex = stream.Duplex;


// Third Party Dependencies
global._ = require('lodash');
global.async = require('async');
global.browserify = require('browserify');
global.fs = require('fs-extra');
global.fsTemp = require('fs-temp');
global.Ignore = require('fstream-ignore');
global.inquirer = require('inquirer');
global.mdns = require('mdns-js');
global.mkdirp = require('mkdirp');
global.NodeRSA = require('node-rsa');
global.osenv = require('osenv');
global.sinon = require('sinon');
global.sshpk = require('sshpk');
global.ssh = require('ssh2');
global.tar = require('tar');
global.uglify = require('uglify-js');


// Internal
// ./lib/tessel/*
global.Tessel = require('../../lib/tessel/tessel');
global.commands = require('../../lib/tessel/commands');
global.deploy = require('../../lib/tessel/deploy');
global.provision = require('../../lib/tessel/provision');

// ./lib/*
global.controller = require('../../lib/controller');
global.discover = require('../../lib/discover');
global.logs = require('../../lib/logs');
global.updates = require('../../lib/update-fetch');
global.lan = require('../../lib/lan_connection');
global.usb = require('../../lib/usb_connection');

// ./lib/usb/*
global.Daemon = require('../../lib/usb/usb_daemon');

// ./test/common/*
global.TesselSimulator = require('../common/tessel-simulator');
global.RemoteProcessSimulator = require('../common/remote-process-simulator');

// ./bin/*
global.cli = require('../../bin/tessel-2');


// Shorthands
global.LAN = lan.LAN;
global.TesselSeeker = discover.TesselSeeker;
global.USB = usb.USB;
