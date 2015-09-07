const template = require('./template.html')

export default function shoe () {
  return {
    restrict: 'EA',
    template: template,
    link: link,
    controller: 'ShoeController',
    controllerAs: 'shoeVM',
    bindToController: true
  }

  function link (scope, element, attrs, vm) {
    element.addClass('shoe')
  }
}
