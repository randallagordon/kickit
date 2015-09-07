import angular from 'angular'
import { expect } from 'chai'

import 'angular-mocks'
import { MockFirebase } from 'mockfirebase'

const shoeFixture = require(`../../../test/fixtures/shoe`)

import kickitDirectives from '..'

describe('shoeDirective', function () {
  const ctx = this

  beforeEach(() => {
    angular.mock.module(kickitDirectives)

    angular.mock.inject(function($rootScope, $compile) {
      ctx.scope = $rootScope.$new()
      ctx.scope.shoe = shoeFixture
      ctx.element = angular.element('<shoe></shoe>')
      ctx.compiled = $compile(ctx.element)(ctx.scope)
    })
  })

  it('should exist', inject(function($injector) {
    expect($injector.has('shoeDirective')).to.be.true
  }))

  it('should show 5 details about a shoe', inject(function($injector) {
    ctx.scope.$digest()
    expect(ctx.element.find('span').length).to.be.equal(5)
  }))
})
