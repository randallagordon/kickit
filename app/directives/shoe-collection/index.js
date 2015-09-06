import ShoeCollectionController from './controller'

import styles from './styles.sass'
import insertCss from 'insert-css'
insertCss(styles)

import template from './template.html'

export default function () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      shoes: '='
    },
    link: link,
    controller: ShoeCollectionController,
    controllerAs: 'shoeCollectionVM',
    bindToController: true
  }

  function link (scope, element, attrs, vm) {
    element.addClass('shoe-collection')
  }
}
