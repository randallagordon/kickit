const template = require('./template.html')

export default function shoeCollection () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      shoes: '='
    },
    link: link,
    controller: 'ShoeCollectionController',
    controllerAs: 'shoeCollectionVM',
    bindToController: true
  }

  function link (scope, element, attrs, vm) {
    element.addClass('shoe-collection')
  }
}
