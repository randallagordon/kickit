import angular from 'angular'
import { expect } from 'chai'

import 'angular-mocks'
import { MockFirebase } from 'mockfirebase'

const shoeFixture = require(`../../../test/fixtures/shoe`)

import kickitDirectives from '..'

describe('ShoeController', function () {
  const ctx = this

  beforeEach(() => {
    angular.mock.module(kickitDirectives)

    angular.mock.inject(function($controller, $rootScope) {
      ctx.scope = $rootScope.$new()

      ctx.scope.shoe = shoeFixture

      ctx.controller = $controller('ShoeController', {
        $scope: ctx.scope,
      })

      $rootScope.$apply()
    })
  })

  it('should exist', function () {
    expect(ctx.controller).to.not.be.undefined
  })
})
