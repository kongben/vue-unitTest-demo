import { shallowMount } from '@vue/test-utils'
import Http from "@/components/http.vue";
import { getUserInfo } from "../../src/apis/user";
import flushPromises from 'flush-promises'
// mock 掉 user 模块
jest.mock('../../src/apis/user');

// 指定 getUserInfo 方法返回假数据
getUserInfo.mockResolvedValue({
  name: 'olive',
  desc: 'software engineer',
});
// 测试http 请求的用例
it('点击事件', async () => {
  const wrapper = shallowMount(Http);
  await flushPromises()
  expect(wrapper.find('.name').text()).toBe('olive');
  expect(wrapper.find('.desc').text()).toBe('software engineer');
  
})