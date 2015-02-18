/**
 * Created by ron on 2/18/2015.
 */

'user strict';

/**
 * config for the router
 */
angular.module('app')
  .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider
    //    .otherwise('/app/dashboard-v1');

    $stateProvider
      //Project dashboard (no children)
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['scripts/controllers/projects.js']);
          }]
        }
      })

      .state('project.detail', {
        url: '/detail',
        templateUrl: 'views/detail/project_detail_view.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['scripts/controllers/projectDetailCtrl.js']);
          }]
        }
      })

      //content navigation tree
      .state('content', {
        abstract: true,
        url: '/content/{projectId}',
        templateUrl: 'views/project.html'
      })

      .state('content.summary', {
        url: '/summary',
        templateUrl: 'views/content/content_summary_view.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['scripts/controllers/contentSummaryCtrl.js']);
          }]
        }
      })

      .state('content.add', {
        url: '/add',
        templateUrl: 'views/content/content_add_view.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['scripts/controllers/contentAddCtrl.js']);
          }]
        }
      })

      .state('content.detail', {
        url: '/detail/{contentId}',
        templateUrl: 'views/content/content_detail_view.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['script/controllers/contentDetailCtrl.js']);
          }]
        }
      })

      //by content type
      //by category
      //by tag

      //App navigation tree
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'views/app.html'
      })

      //.state('app.projects', {
      //    url: '/projects',
      //    templateUrl: 'views/app_projects.html',
      //    resolve: {
      //        deps: ['$ocLazyLoad', function($ocLazyLoad) {
      //            return $ocLazyLoad.load(['scripts/controllers/projects.js']);
      //        }]
      //    }
      //})

      .state('app.dashboard-v1', {
        url: '/dashboard-v1',
        templateUrl: 'views/app_dashboard_v1.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['scripts/controllers/chart.js'])
          }]
        }
      })

      .state('app.dashboard-v2', {
        url: '/dashboard-v2',
        templateUrl: 'views/app_dashboard-v2.html',
        resolve: {
          deps: ['ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load(['scripts/controllers/chart.js'])
          }]
        }
      })

      .state('app.ui', {
        url: '/ui',
        template: '<div ui-view class="fade-in-up"></div>'
      })

      .state('app.ui.buttons', {
        url: '/buttons',
        templateUrl: 'views/ui_buttons.html'
      })

      .state('app.ui.icons', {
        url: '/icons',
        templateUrl: 'views/ui_icons.html'
      })

      .state('app.ui.grid', {
        url: '/grid',
        templateUrl: 'views/ui_grid.html'
      })

      .state('app.ui.widgets', {
        url: '/widgets',
        templateUrl: 'views/ui_widgets.html'
      })

      .state('app.ui.bootstrap', {
        url: '/bootstrap',
        templateUrl: 'views/ui_bootstrap.html'
      })

      .state('app.ui.sortable', {
        url: '/sortable',
        templateUrl: 'views/ui_sortable.html'
      })

      .state('app.ui.portlet', {
        url: '/portlet',
        templateUrl: 'views/ui_portlet.html'
      })

      .state('app.ui.timeline', {
        url: '/timeline',
        templateUrl: 'views/ui_timeline.html'
      })

      .state('app.ui.tree', {
        url: '/tree',
        templateUrl: 'views/ui_tree.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('angularBootstrapNavTree').then(function() {
              return $ocLazyLoad.load('scripts/controllers/tree.js');
            });
          }]
        }
      })

      .state('app.ui.toaster', {
        url: '/toaster',
        templateUrl: 'views/ui_toaster.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('toaster').then(
              function() {
                return $ocLazyLoad.load('scripts/controllers/toaster.js');
              }
            );
          }]
        }
      })

      .state('app.ui.jvectormap', {
        url:  '/jvectormap',
        templateUrl: 'views/ui_jvectormap.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('scripts/controllers/vectormap.js');
          }]
        }
      })

      .state('app.ui.googlemap', {
        url: '/googlemap',
        templateUrl: 'views/ui_googlemap.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load([
              'scripts/app/map/load-google-maps.js',
              'scripts/app/map/ui-map.js',
              'scripts/app/map/map.js'
            ]).then(function() {
              return loadGoogleMaps();
            });
          }]
        }
      })

      .state('app.chart', {
        url: '/chart',
        templateUrl: 'views/ui_chart.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load('scripts/controllers/chart.js');
          }]
        }
      })

      //table
      .state('app.table', {
        url: '/table',
        templateUrl: '<div ui-view></div>'
      })

      .state('app.table.static', {
        url: '/static',
        templateUrl: 'views/table_static.html'
      })

      .state('app.table.datatable', {
        url: '/datatable',
        templateUrl: 'views/table_datatable.html'
      })

      .state('app.table.footable', {
        url: '/footable',
        templateUrl: 'views/table_footable.html'
      })

      .state('app.table.grid', {
        url: '/grid',
        templateUrl: 'views/table_grid.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('ngGrid').then(function() {
              return $ocLazyLoad.load('scripts/controllers/grid.js');
            });
          }]
        }
      })

      .state('app.table.uigrid', {
        url: '/uigrid',
        templateUrl: 'views/table_uigrid.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('ui.grid').then(function() {
              return $ocLazyLoad.load('scripts/controllers/uigrid.js');
            });
          }]
        }
      })

      .state('app.table.editable', {
        url: '/editable',
        templateUrl: 'views/table_editable.html',
        controller: 'XeditableCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('xeditable').then(function() {
              return $ocLazyLoad.load('scripts/controllers/xeditable.js');
            });
          }]
        }
      })

      //form
      .state('app.form', {
        url: '/form',
        template: '<div ui-view class="fade-in"></div>',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load('scripts/controllers/form.js');
          }]
        }
      })

      .state('app.form.elements', {
        url: '/elements',
        templateUrl: 'views/form_elements.html'
      })

      .state('app.form.validation', {
        url: '/validation',
        templateUrl: 'views/form_validation.html'
      })

      .state('app.form.wizard', {
        url: '/wizard',
        templateUrl: 'views/form_wizard.html'
      })

      .state('app.form.fileupload', {
        url: '/fileupload',
        templateUrl: 'views/form_fileupload.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('angularFileUpload').then(function() {
              return $ocLazyLoad.load('scripts/controllers/file-upload.js');
            });
          }]
        }
      })

      .state('app.form.imagecrop', {
        url: '/imagecrop',
        templateUrl: 'views/form_imagecrop.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('ngImgCrop').then(function() {
              return $ocLazyLoad.load('scripts/controllers/imgcrop.js');
            });
          }]
        }
      })

      .state('app.form.select', {
        url: '/select',
        templateUrl: 'views/form_select.html',
        controller: 'SelectCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('ui.select').then(function() {
              return $ocLazyLoad.load('scripts/controllers/select.js');
            });
          }]
        }
      })

      .state('app.form.slider', {
        url: '/slider',
        templateUrl: 'views/form_slider.html',
        controller: 'SliderCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('vr.directives.slider').then(function() {
              return $ocLazyLoad.load('scripts/controllers/slider.js');
            });
          }]
        }
      })

      .state('app.form.editor', {
        url: '/editor',
        templateUrl: 'views/form_editor.html',
        controller: 'EditorCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('textAngular').then(function() {
              return $ocLazyLoad.load('scripts/controllers/editor.js');
            });
          }]
        }
      })

      .state('app.form.xeditable', {
        url: '/xeditable',
        templateUrl: 'views/form_xeditable.html',
        controller: 'XeditableCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('xeditable').then(function() {
              return $ocLazyLoad.load('scripts/controllers/xeditable.js');
            });
          }]
        }
      })

      .state('app.page', {
        url: '/page',
        template: '<div ui-view class="fade-in-down"></div>'
      })

      .state('app.page.profile', {
        url: '/profile',
        templateUrl: 'views/page_profile.html'
      })

      .state('app.page.post', {
        url: '/post',
        templateUrl: 'views/page_post.html'
      })
      .state('app.page.search', {
        url: '/search',
        templateUrl: 'views/page_search.html'
      })
      .state('app.page.invoice', {
        url: '/invoice',
        templateUrl: 'views/page_invoice.html'
      })
      .state('app.page.price', {
        url: '/price',
        templateUrl: 'views/page_price.html'
      })
      .state('app.docs', {
        url: '/docs',
        templateUrl: 'views/docs.html'
      })
      //others
      .state('lockme', {
        url: 'lockme',
        templateUrl: 'views/page_lockme.html'
      })
      .state('access', {
        url: '/access',
        template: '<div ui-view class="fade-in-right-big smooth"></div>'
      })
      .state('access.signin', {
        url: '/signin',
        templateUrl: 'views/page_signin.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load(['scripts/controllers/signin.js']);
          }]
        }
      })
      .state('access.signup', {
        url: '/signup',
        templateUrl: 'views/page_signup.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load(['scripts/controllers/signup.js']);
          }]
        }
      })
      .state('access.forgotpwd', {
        url: '/forgotpwd',
        templateUrl: 'views/page_forgotpwd.html'
      })
      .state('access.404', {
        url: '/404',
        templateUrl: 'views/page_404.html'
      })

      //full calendar
      .state('app.calendar', {
        url: '/calendar',
        templateUrl: 'views/app_calendar.html',
        //use resolve to load other dependencies
        resolve: {
          deps: ['$ocLazyLoad', 'uiLoad', function($ocLazyLoad, uiLoad) {
            return uiLoad.load([
              'vendor/jquery/fullcalendar/fullcalendar.css',
              'vendor/jquery/fullcalendar/theme.css',
              'vendor/jquery/jquery-ui-1.10.3.custom.min.js',
              'vendor/libs/moment.min.js',
              'vendor/jquery/fullcalendar/fullcalendar.min.js',
              'scripts/app/calendar/calendar.js'
            ]).then(function() {
              return $ocLazyLoad.load('ui.calendar');
            })
          }]
        }
      })

      //mail
      .state('app.mail', {
        abstract: true,
        url: '/mail',
        templateUrl: 'views/mail.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load([
              'scripts/app/mail/mail.js',
              'scripts/app/mail/mail-service.js',
              'vendor/libs/moment.min.js'
            ])
          }]
        }
      })
      .state('app.mail.list', {
        url: '/inbox/{fold}',
        templateUrl: 'views/mail.list.html'
      })
      .state('app.mail.detail', {
        url: '/{mailId:[0-9]{1,4}}',
        templateUrl: 'views/mail.detail.html'
      })
      .state('app.mail.compose', {
        url: '/compose',
        templateUrl: 'views/mail.new.html'
      })

      .state('layout', {
        abstract: true,
        url: '/layout',
        templateUrl: 'views/layout.html'
      })
      .state('layout.fullwidth', {
        url: '/fullwidth',
        views: {
          '': {
            templateUrl: 'views/layout_fullwidth.html'
          },
          'footer': {
            templateUrl: 'views/layout_footer_fullwidth.html'
          }
        },
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load(['scripts/controllers/vectormap.js']);
          }]
        }
      })
      .state('layout.mobile', {
        url: '/mobile',
        views: {
          '': {
            templateUrl: 'views/layout_mobile.html'
          },
          'footer': {
            templateUrl: 'views/layout_footer_mobile.html'
          }
        }
      })
      .state('layout.app', {
        url: '/app',
        views: {
          '': {
            templateUrl: 'views/layout_app.html'
          },
          'footer': {
            templateUrl: 'views/layout_footer_fullwidth.html'
          }
        },
        resolve: {
          deps: ['uiLoad',
            function( uiLoad ){
              return uiLoad.load( ['scripts/controllers/tab.js'] );
            }]
        }
      })
      .state('apps', {
        abstract: true,
        url: '/apps',
        templateUrl: 'views/layout_html'
      })
      .state('apps.note', {
        url: '/note',
        templateUrl: 'views/apps_note.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load([
              'scripts/app/note/note.js',
              'vendor/libs/moment.min.js'
            ]);
          }]
        }
      })
      .state('apps.contact', {
        url: '/contact',
        templateUrl: 'views/apps_contact.html',
        resolve: {
          deps: ['uiLoad', function(uiLoad) {
            return uiLoad.load(['scripts/app/contact/contact.js']);
          }]
        }
      })
      .state('app.weather', {
        url: '/weather',
        templateUrl: 'views/apps_weather.html',
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'angular-skycons',
              files: [
                'scripts/app/weather/skycons.js',
                'vendor/libs/moment.min.js',
                'scripts/app/weather/angular-skycons.js',
                'scripts/app/weather/ctrl.js'
              ]
            });
          }]
        }
      })
      .state('music', {
        url: '/music',
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl',
        resolve: {
          deps: ['$ocLazyLoad',
            function( $ocLazyLoad ){
              return $ocLazyLoad.load([
                'com.2fdevs.videogular',
                'com.2fdevs.videogular.plugins.controls',
                'com.2fdevs.videogular.plugins.overlayplay',
                'com.2fdevs.videogular.plugins.poster',
                'com.2fdevs.videogular.plugins.buffering',
                'scripts/app/music/ctrl.js',
                'scripts/app/music/theme.css'
              ]);
            }]
        }
      })
      .state('music.home', {
        url: '/home',
        templateUrl: 'views/music.home.html'
      })
      .state('music.genres', {
        url: '/genres',
        templateUrl: 'views/music.genres.html'
      })
      .state('music.detail', {
        url: '/detail',
        templateUrl: 'music.detail.html'
      })
      .state('music.mtv', {
        url: '/mtv',
        templateUrl: 'views/music.mtv.html'
      })
      .state('music.mtvdetail', {
        url: '/mtvdetail',
        templateUrl: 'views/music.mtv.detail.html'
      })
      .state('music.playlist', {
        url: '/playlist/{fold}',
        templateUrl: 'views/music.playlist.html'
      })
  }]);
