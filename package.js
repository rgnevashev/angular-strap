// Package metadata file for Meteor.js
var packageName = 'mgcrea:angular-strap';
var where = 'client';
var version = '2.3.6';
var summary = 'AngularJS 1.2+ native directives AND templates for Bootstrap 3.';
var gitLink = 'https://github.com/mgcrea/angular-strap';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
  'dist/angular-strap.js',
  'dist/angular-strap.tpl.js'
  ], where);
}); 
