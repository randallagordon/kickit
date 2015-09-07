import shoe from './directive'
import ShoeController from './controller'

export default angular.module('kickit.directives.shoe', [
  ])
  .directive('shoe', shoe)
  .controller('ShoeController', ShoeController)
  .name
