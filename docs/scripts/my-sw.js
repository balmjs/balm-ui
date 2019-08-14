if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        // console.log('SW registered');
        console.log('gg');
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
