const angular = require('angular')

export default angular.module('kickit.controllers', [
    require('../services')
  ])
  .controller('KickitController', require('./kickit'))
  .name
