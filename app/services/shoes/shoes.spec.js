import angular from 'angular'
import 'angular-mocks'
import { expect } from 'chai'
import { MockFirebase } from 'mockfirebase'

import kickitServices from '..'

describe('ShoeService', function () {
  var ctx = this

  beforeEach(() => {
    angular.mock.module(kickitServices)

    angular.mock.inject(function ($window) {
      $window.Firebase = MockFirebase
    })

    angular.mock.inject(function (_ShoesService_) {
      ctx.ShoesService = _ShoesService_
    })
  })

  it('should return a $firebaseArray of shoes', function () {
    expect(ctx.ShoesService).to.have.any.keys('$add', '$save', '$remove')
  })
})
