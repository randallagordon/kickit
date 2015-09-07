import shoeCollection from './directive'
import ShoeCollectionController from './controller'

export default angular.module('kickit.directives.shoeCollection', [
  ])
  .directive('shoeCollection', shoeCollection)
  .controller('ShoeCollectionController', ShoeCollectionController)
  .name
