import angular from 'angular'
import { expect } from 'chai'

import 'angular-mocks'
import { MockFirebase } from 'mockfirebase'

import kickitControllers from '..'

describe('KickitController', function () {
  const ctx = this

  beforeEach(() => {
    angular.mock.module(kickitControllers)

    angular.mock.inject(function($controller, $rootScope) {
      ctx.scope = $rootScope.$new()

      ctx.controller = $controller('KickitController', {
        $scope: ctx.scope,
      })

      $rootScope.$apply()
    })
  })

  it('should exist', function () {
    expect(ctx.controller).to.not.be.undefined
  })
})
