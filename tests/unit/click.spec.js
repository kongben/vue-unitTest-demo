import { shallowMount } from '@vue/test-utils'
import Click from "@/components/click.vue";

// 测试事件的用例
it('点击事件',async ()=>{
    const wrapper = shallowMount(Click);
    expect(wrapper.vm.msg).toBe('Hello Jest')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.find('h1').text()).toBe('new message')
  })