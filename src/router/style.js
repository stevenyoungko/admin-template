import Layout from '@/layout'
export default {
  path: '/style',
  component: Layout,
  redirect: '/style/forms',
  name: 'Style',
  meta: { title: '样式规范', icon: 'form' },
  children: [
    {
      path: 'forms',
      name: 'StyleForms',
      component: () => import('@/views/style/Forms'),
      meta: { title: 'Forms', icon: 'form' }
    }
  ]
}
