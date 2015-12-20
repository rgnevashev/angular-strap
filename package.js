Package.describe({
  name: 'mgcrea:angular-strap',
  version: '2.3.6',
  summary: 'AngularJS 1.2+ native directives AND templates for Bootstrap 3.',
  git: 'https://github.com/mgcrea/angular-strap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    "dist/angular-strap.js",
    "dist/angular-strap.tpl.js"
  ], 'client');
}); 
