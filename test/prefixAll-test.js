import { expect } from 'chai'
import prefixAll from '../modules/prefixAll'


describe('Prefixing all properties', () => {
  it('should only add prefixes if browsers need it', () => {
    const input = { transition: '200ms all linear' }
    const output = {
      WebkitTransition: '200ms all linear',
      transition: '200ms all linear'
    }
    expect(prefixAll(input)).to.eql(output)
  })

  it('should add all prefixes', () => {
    const input = { userSelect: 'none' }
    const output = {
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none'
    }
    expect(prefixAll(input)).to.eql(output)
  })
})

describe('Resolving special plugins', () => {
  it('should prefix calc expressions', () => {
    const input = { width: 'calc(30px)' }
    const output = {
      width: '-webkit-calc(30px);width:-moz-calc(30px);width:calc(30px)'
    }
    expect(prefixAll(input)).to.eql(output)
  })
})