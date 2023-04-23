const Grid = () => import('@/views/components/grid');
const BottomSheet = () => import('@/views/components/bottom-sheet');
const SideSheet = () => import('@/views/components/side-sheet');
const Card = () => import('@/views/components/card');
const Dialog = () => import('@/views/components/dialog');
const AlertDialog = () => import('@/views/plugins/alert-dialog');
const ConfirmDialog = () => import('@/views/plugins/confirm-dialog');
const Divider = () => import('@/views/components/divider');
const List = () => import('@/views/components/list');
const ImageList = () => import('@/views/components/image-list');
const Form = () => import('@/views/components/form');
const Table = () => import('@/views/components/table');
const Tree = () => import('@/views/components/tree');
const Collapse = () => import('@/views/components/collapse');
const Lazyload = () => import('@/views/plugins/lazyload');

export default [
  {
    path: 'grid',
    name: 'containment.grid',
    component: Grid,
    meta: { noLayout: true }
  },
  {
    path: 'bottom-sheet',
    name: 'containment.bottom-sheet',
    component: BottomSheet
  },
  {
    path: 'side-sheet',
    name: 'containment.side-sheet',
    component: SideSheet
  },
  {
    path: 'card',
    name: 'containment.card',
    component: Card
  },
  {
    path: 'dialog',
    name: 'containment.dialog',
    component: Dialog
  },
  {
    path: 'alert-dialog',
    name: 'containment.alert-dialog',
    component: AlertDialog
  },
  {
    path: 'confirm-dialog',
    name: 'containment.confirm-dialog',
    component: ConfirmDialog
  },
  {
    path: 'divider',
    name: 'containment.divider',
    component: Divider
  },
  {
    path: 'list',
    name: 'containment.list',
    component: List
  },
  {
    path: 'image-list',
    name: 'containment.image-list',
    component: ImageList
  },
  {
    path: 'form',
    name: 'containment.form',
    component: Form
  },
  {
    path: 'table',
    name: 'containment.table',
    component: Table
  },
  {
    path: 'tree',
    name: 'containment.tree',
    component: Tree
  },
  {
    path: 'collapse',
    name: 'containment.collapse',
    component: Collapse
  },
  {
    path: 'lazyload',
    name: 'containment.lazyload',
    component: Lazyload
  }
];
