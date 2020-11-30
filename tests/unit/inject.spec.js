import { shallowMount } from '@vue/test-utils'
import Inject from "@/components/inject.vue";
import Vue from 'vue';
import { config } from '@vue/test-utils';

Vue.config.productionTip = false;

// provide 的模拟
config.provide.GLOBAL = {
  logined: false,
};

// 测试provide/inject的用例
it('点击事件', ()=>{
    const wrapper = shallowMount(Inject);
    expect(wrapper.find('h1').isVisible()).toBe(false);
  })