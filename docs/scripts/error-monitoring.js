import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import { VERSION } from '@/config';

function errorMonitoring(app, router) {
  Sentry.init({
    app,
    dsn: 'https://efed44e0fdc94f21917e3e0a1d9d7d9b@o1097421.ingest.sentry.io/6118851',
    release: `balm-ui@${VERSION}`,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'next-material.balmjs.com', /^\//]
      })
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  });
}

export default errorMonitoring;
