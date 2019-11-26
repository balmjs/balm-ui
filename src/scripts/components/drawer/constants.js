// Define drawer constants
export default {
  // TYPES: ['standard', 'modal', 'bottom'], // NOTE: Bottom drawer is only for use on mobile.
  VARIANTS: {
    permanent: 0,
    dismissible: 1,
    modal: 2
  },
  EVENT: {
    NAV: 'nav',
    OPENED: 'opened',
    CLOSED: 'closed'
  }
};
