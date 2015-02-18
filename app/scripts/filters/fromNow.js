/**
 * Created by ron on 2/18/2015.
 */

'use strict';

//need to load moment.js to use this filter
angular.module('app')
  .filter('fromNow', function() {
    return function(date) {
      return moment(data).fromNow();
    }
  });
