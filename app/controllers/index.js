import angular from 'angular'

import services from '../services'

import KickitController from './kickit'

export default angular.module('kickit.controllers', [
    services
  ])
  .controller('KickitController', KickitController)
  .name
