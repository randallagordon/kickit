const angular = require('angular')

const firebase = require('firebase')
const angularFire = require('angularfire')

export default angular.module('kickit.services', [
    angularFire
  ])
  .constant('FIREBASE_URI', 'https://kickit-dev.firebaseio.com')
  .factory('ShoesService', require('./shoes'))
  .name
