/**
 * Created by ron on 2/18/2015.
 */
// lazyload config

angular.module('app')
/**
 * jQuery plugin config use ui-jq directive , config the js and css files that required
 * key: function name of the jQuery plugin
 * value: array of the css js file located
 */
  .constant('JQ_CONFIG', {
    easyPieChart:   ['bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.js'], //good
    sparkline:      ['vendor/jquery/charts/sparkline/jquery.sparkline.min.js'],             //not good
    plot:           ['bower_components/flot/jquery.flot.js',                                //good
    'bower_components/flot/jquery.flot.resize.js',                                          //good
      'bower_components/flot/jquery.flot.tooltip.min.js',                                   //not good
      'vendor/jquery/charts/flot/jquery.flot.spline.js',                                    //not good
      'vendor/jquery/charts/flot/jquery.flot.orderBars.js',                                 //not good
      'bower_components/jquery/charts/flot/jquery.flot.pie.js'],                            //good
    slimScroll:     ['bower_components/slimscroll/jquery.slimscroll.min.js'],               //good
    sortable:       ['bower_components/html5sortable/jquery.sortable.js'],                  //good
    nestable:       ['bower_components/nestable/jquery.nestable.js',                        //good
      'vendor/jquery/nestable/nestable.css'],                                               //not good, need to copy
    filestyle:      ['bower_components/bootstrap-filestyle/bootstrap-filestyle.js'],        //good
    slider:         ['bower_components/bootstrap-slider/bootstrap-slider.js',               //good
      'bower_components/bootstrap-slider/slider.css'],                                      //good
    chosen:         ['bower_components/chosen/chosen.jquery.min.js',                        //good
      'bower_components/chosen/chosen.css'],                                                //good
    TouchSpin:      ['bower_components/bootstrap-touchspin/jquery.bootstrap-touchspin.js',  //good
      'bower_components/bootstrap-touchspin/jquery.bootstrap-touchspin.css'],               //good
    wysiwyg:        ['bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',             //good
      'bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],                     //good
    dataTable:      ['bower_components/datatables/media/js/jquery.dataTables.min.js',       //good
      'vendor/jquery/datatables/dataTables.bootstrap.js',                                   //not good
      'vendor/jquery/datatables/dataTables.bootstrap.css'],                                 //not good
    vectorMap:      ['bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',    //good
      'bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',               //good
      'vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',                            //not good
      'bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],                     //good
    footable:       ['bower_components/footable/dist/footable.all.min.js',                  //good
      'bower_components/footable/css/footable.core.css']                                    //good
  }
)
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    // We configure ocLazyLoad to use the lib script.js as the async loader
    $ocLazyLoadProvider.config({
      debug:  true,
      events: true,
      modules: [
        {
          name: 'ngGrid',
          files: [
            'bower_components/ng-grid/ng-grid-2.0.14.min.js',                               //good
            'bower_components/ng-grid/ng-grid.min.css',                                     //good
            'vendor/modules/ng-grid/theme.css'                                              //not good
          ]
        },
        {
          name: 'ui.grid',
          files: [
            'bower_components/angular-ui-grid/ui-grid.min.js',                              //good
            'bower_components/angular-ui-grid/ui-grid.min.css'                              //good
          ]
        },
        {
          name: 'ui.select',
          files: [
            'bower_components/angular-ui-select/dist/select.min.js',                        //good
            'bower_components/angular-ui-select/dist/select.min.css'                        //good
          ]
        },
        {
          name:'angularFileUpload',
          files: [
            'bower_components/angular-file-upload/angular-file-upload.min.js'               //good
          ]
        },
        {
          name:'ui.calendar',
          files: ['bower_components/angular-ui-calendar/src/calendar.js']                   //good
        },
        {
          name: 'ngImgCrop',
          files: [
            'bower_components/ngImgCrop/compile/minified/ng-img-crop.js',                   //good
            'bower_components/ngImgCrop/compile/minified/ng-img-crop.css'                   //good
          ]
        },
        {
          name: 'angularBootstrapNavTree',
          files: [
            'bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',       //good
            'bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'                 //good
          ]
        },
        {
          name: 'toaster',
          files: [
            'bower_components/angularjs-toaster/toaster.js',                                //good
            'bower_components/angularjs-toaster/toaster.css'                                //good
          ]
        },
        {
          name: 'textAngular',
          files: [
            'bower_components/textAngular/src/textAngular-sanitize.js',                     //good
            'bower_components/textAngular/src/textAngular.js'                               //good
          ]
        },
        {
          name: 'vr.directives.slider',
          files: [
            'vendor/modules/angular-slider/angular-slider.min.js',                          //not good
            'vendor/modules/angular-slider/angular-slider.css'                              //not good
          ]
        },
        {
          name: 'com.2fdevs.videogular',
          files: [
            'bower_components/videogular/videogular.min.js'                                 //good
          ]
        },
        {
          name: 'com.2fdevs.videogular.plugins.controls',
          files: [
            'bower_components/videogular-controls/controls.min.js'                          //good
          ]
        },
        {
          name: 'com.2fdevs.videogular.plugins.buffering',
          files: [
            'bower_components/videogular-buffering/buffering.min.js'                        //good
          ]
        },
        {
          name: 'com.2fdevs.videogular.plugins.overlayplay',
          files: [
            'bower_components/videogular-overlay-play/overlay-play.min.js'                  //good
          ]
        },
        {
          name: 'com.2fdevs.videogular.plugins.poster',
          files: [
            'bower_components/videogular-poster/poster.min.js'                              //good
          ]
        },
        {
          name: 'com.2fdevs.videogular.plugins.imaads',
          files: [
            'bower_components/videogular-ima-ads/ima-ads.min.js'                            //good
          ]
        },
        {
          name: 'xeditable',
          files: [
            'bower_components/angular-xeditable/dist/js/xeditable.min.js',                  //good
            'bower_components/angular-xeditable/dist/css/xeditable.css'                     //good
          ]
        }
      ]
    });
  }]);
