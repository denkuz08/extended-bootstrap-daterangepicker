Package.describe({
  name: 'denkuz08:extended-bootstrap-daterangepicker',
  version: '2.1.26',
  summary: 'Extended Date range picker component for Bootstrap',
  git: 'https://github.com/denkuz08/extended-bootstrap-daterangepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('twbs:bootstrap@3.3.4', ["client"], {weak: true});
  api.use('momentjs:moment@2.10.3', ["client"]);
  api.use('jquery@1.11.3_2', ["client"]);

  api.addFiles('daterangepicker.js', ["client"]);
  api.addFiles('daterangepicker.css', ["client"]);
});
