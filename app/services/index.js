import angular from 'angular'

import firebase from 'firebase'
import angularFire from 'angularfire'

import ShoesService from './shoes'

export default angular.module('kickit.services', [
    angularFire
  ])
  .constant('FIREBASE_URI', 'https://kickit-dev.firebaseio.com')
  .factory('ShoesService', ShoesService)
  .name
