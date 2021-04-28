import { mount } from '@vue/test-utils'
import Hamburger from '@/components/Hamburger/index.vue'

describe('Hamburger.vue', () => {
  it('toggle click', () => {
    const wrapper = mount(Hamburger)
    const mockFn = jest.fn()
    wrapper.vm.$on('toggleClick', mockFn)
    wrapper.find('.hamburger').trigger('click')
    expect(mockFn).toBeCalled()
  })
  it('prop is-active', () => {
    const wrapper = mount(Hamburger, {
      propsData: {
        isActive: true
      }
    })
    expect(wrapper.find('.hamburger').classes().length).toBe(2)
  })
})
