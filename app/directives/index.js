import angular from 'angular'

import shoeCollection from './shoe-collection'
import shoe from './shoe'

export default angular.module('kickit.directives', [
  ])
  .directive('shoeCollection', shoeCollection)
  .directive('shoe', shoe)
  .name
