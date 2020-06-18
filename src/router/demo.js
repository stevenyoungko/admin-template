import Layout from '@/layout'

export default {
  path: '/demo',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Demo',
  meta: { title: '展示', noCache: true },
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
    },
    {
      path: 'dialog',
      name: 'DialogDemo',
      component: () => import('@/views/demo/dialog'),
      meta: {
        title: '会画弹窗'
      }
    },
    {
      path: 'button',
      name: 'DemoButton',
      component: () => import('@/views/demo/button'),
      meta: {
        title: '按鈕列表', noCache: true
      }
    },
    {
      path: 'level2',
      name: 'Level2',
      component: () => import('@/views/demo/level2/level2'),
      meta: {
        title: '巢状展示', noCache: true, alwaysShow: true
      },
      children: [
        {
          path: 'level3',
          name: 'level3',
          component: () => import('@/views/demo/level2/level3/level3'),
          meta: {
            title: '第三层', noCache: true, alwaysShow: true
          },
          children: [
            {
              path: 'level4',
              name: 'Level4',
              component: () => import('@/views/demo/level2/level3/level4/level4'),
              meta: {
                title: '第四层', noCache: true, alwaysShow: true
              },
              children: [
                {
                  path: 'level5',
                  name: 'Level5',
                  component: () => import('@/views/demo/level2/level3/level4/level5/level5'),
                  meta: {
                    title: '第五层', noCache: true, alwaysShow: true
                  },
                  children: [
                    {
                      path: 'level6',
                      name: 'Level6',
                      component: () => import('@/views/demo/level2/level3/level4/level5/level6/level6'),
                      meta: {
                        title: '第六层', noCache: true, alwaysShow: true
                      }
                    },
                    {
                      path: 'level-6-1',
                      name: 'Level6of1',
                      component: () => import('@/views/demo/level2/level3/level4/level5/level6/level6-1'),
                      meta: {
                        title: '第六层之一', noCache: true, alwaysShow: true
                      }
                    }
                  ]
                },
                {
                  path: 'level-5-1',
                  name: 'Level5of1',
                  component: () => import('@/views/demo/level2/level3/level4/level5/level5-1'),
                  meta: {
                    title: '第五层之一', noCache: true, alwaysShow: true
                  }
                }
              ]
            },
            {
              path: 'level-4-1',
              name: 'Level4of1',
              component: () => import('@/views/demo/level2/level3/level4/level4-1'),
              meta: {
                title: '第四层之一', noCache: true, alwaysShow: true
              }
            }
          ]
        },
        {
          path: 'level-3-1',
          name: 'Level3of1',
          component: () => import('@/views/demo/level2/level3/level3-1'),
          meta: {
            title: '第三层之一', noCache: true, alwaysShow: true
          }
        }
      ]
    }
  ]
}
