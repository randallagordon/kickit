import angular from 'angular'

import services from './services'
import directives from './directives'
import controllers from './controllers'

export default angular.module('kickit', [
    services,
    directives,
    controllers
  ])
