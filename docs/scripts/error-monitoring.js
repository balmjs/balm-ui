import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

function errorMonitoring(Vue, router) {
  Sentry.init({
    Vue,
    dsn: 'https://0578ca9a55264c48b743cdff781dd09f@o1097421.ingest.sentry.io/6118847',
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'material.balmjs.com', /^\//]
      })
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  });
}

export default errorMonitoring;
