import Layout from '@/layout'

export default {
  path: '/demo',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Demo',
  meta: { title: '展示' },
  children: [
    {
      path: 'normal',
      name: 'DemoDefault',
      component: () => import('@/views/demo/index'),
      meta: { title: '基本展示' }
    },
    {
      path: 'double',
      name: 'DemoDoubleTable',
      component: () => import('@/views/demo/doubleTable'),
      meta: { title: '多表格' }
    },
    {
      path: 'tabTable',
      name: 'DemoTabTable',
      component: () => import('@/views/demo/tabTable'),
      meta: { title: '标签表格' }
    },
    {
      path: 'richtext',
      name: 'DemoRichText',
      component: () => import('@/views/demo/richText.vue'),
      meta: {
        title: '富文本'
      }
    }
  ]
}
