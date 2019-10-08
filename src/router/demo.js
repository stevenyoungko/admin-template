import Layout from '@/layout'

export default {
  path: '/demo',
  component: Layout,
  redirect: '/demo/normal',
  name: 'Demo',
  meta: { title: '样式规范' },
  children: [
    {
      path: 'normal',
      name: 'DemoDefault',
      component: () => import('@/views/demo/index'),
      meta: { title: 'Demo' }
    }
  ]
}
