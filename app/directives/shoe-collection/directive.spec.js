import angular from 'angular'
import { expect } from 'chai'

import 'angular-mocks'
import { MockFirebase } from 'mockfirebase'

import kickitDirectives from '..'

describe('shoeCollectionDirective', function () {
  const ctx = this

  beforeEach(() => {
    angular.mock.module(kickitDirectives)

    angular.mock.inject(function($rootScope, $compile) {
      ctx.scope = $rootScope.$new()
      ctx.element = angular.element('<shoe-collection></shoe-collection>')
      ctx.compiled = $compile(ctx.element)(ctx.scope)
    })
  })

  it('should exist', inject(function($injector) {
    expect($injector.has('shoeCollectionDirective')).to.be.true
  }))
})

