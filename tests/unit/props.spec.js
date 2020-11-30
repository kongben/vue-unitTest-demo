import { shallowMount } from '@vue/test-utils'
import Props from '@/components/props.vue'


// 测试props的用例
it('props 传值', () => {
  const msg = 'new message'
  const wrapper = shallowMount(Props, {
    propsData: { msg }
  })
  expect(wrapper.text()).toMatch(msg)
})



