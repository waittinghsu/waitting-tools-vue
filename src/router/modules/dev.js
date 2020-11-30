import Layout from '@/layout';

const devRouter = {
  path: '/dev',
  component: Layout,
  redirect: 'noRedirect',
  meta: { title: 'dev', icon: 'folder' },
  children: [
    {
      path: 'collapse-box',
      name: 'collapse-box/demo',
      component: () => import('@/views/dev/collapse-box'),
      meta: { title: 'collapseBoxDemo', icon: 'file' },
    },
    {
      path: 'table-demo',
      name: 'table/demo',
      component: () => import('@/views/dev/table-demo/index'),
      meta: { title: 'tableDemo', icon: 'file' },
    },
    {
      path: 'svg-demo',
      name: 'svg/demo',
      component: () => import('@/views/dev/svg-demo'),
      meta: { title: 'iconDemo', icon: 'file' },
    },
    {
      path: 'json-editor',
      name: 'json/editor',
      component: () => import('@/views/dev/json-editor/index'),
      meta: { title: 'jsonEditor', icon: 'file' },
    },
    {
      path: 'custom-form',
      name: 'custom-form',
      component: () => import('@/views/dev/custom-form'),
      meta: { title: 'custom-form Demo', icon: 'file' },
    },
  ],
};

export default devRouter;
