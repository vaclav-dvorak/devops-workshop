import { mount } from '@vue/test-utils'
import test from 'ava'
import Home from '@/components/Home.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(Home)
  t.is(wrapper.isVueInstance(), true)
})
