import angular from 'angular'

import shoeCollection from './shoe-collection'
import shoe from './shoe'

export default angular.module('kickit.directives', [
    shoeCollection,
    shoe
  ])
  .name
