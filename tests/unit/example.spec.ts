import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import JiuJitsu from '@/components/JiuJitsu.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(JiuJitsu);
    expect(wrapper.text()).to.include('This is the Jiu Jitsu Card');
  });
});
