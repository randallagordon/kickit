import ShoeController from './controller'

import styles from './styles.sass'
import insertCss from 'insert-css'
insertCss(styles)

import template from './template.html'

export default function () {
  return {
    restrict: 'EA',
    template: template,
    link: link,
    controller: ShoeController,
    controllerAs: 'shoeVM',
    bindToController: true
  }

  function link (scope, element, attrs, vm) {
    element.addClass('shoe')
  }
}
