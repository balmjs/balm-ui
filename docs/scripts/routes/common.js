// const Badge = () => import('../views/badge');
const Button = () => import('../views/components/button');
const Fab = () => import('../views/components/fab');
const IconToggle = () => import('../views/components/icon-toggle');
// const Chip = () => import('../views/chip');
// const Loading = () => import('../views/loading');
const Menu = () => import('../views/menu');
// const Tooltip = () => import('../views/tooltip');
const Elevation = () => import('../views/elevation');
const Theme = () => import('../views/theme');
const Typography = () => import('../views/typography');
const Icons = () => import('../views/icons');
const LinearProgress = () => import('../views/linear-progress');

const commonRoutes = [
  {
    path: '/button',
    name: 'button',
    component: Button,
    meta: {
      title: 'BalmUI - Button',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/fab',
    name: 'fab',
    component: Fab,
    meta: {
      title: 'BalmUI - Fab',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/icon-toggle',
    name: 'icon-toggle',
    component: IconToggle,
    meta: {
      title: 'BalmUI - Icon toggle',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    meta: {
      title: 'BalmUI - Menu',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/elevation',
    name: 'elevation',
    component: Elevation,
    meta: {
      title: 'BalmUI - Elevation',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme,
    meta: {
      title: 'BalmUI - Theme',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography,
    meta: {
      title: 'BalmUI - Typography',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons,
    meta: {
      title: 'BalmUI - Icons',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/linear-progress',
    name: 'linear-progress',
    component: LinearProgress,
    meta: {
      title: 'BalmUI - Linear Progress',
      keywords: '',
      description: ''
    }
  }
];

export default commonRoutes;
