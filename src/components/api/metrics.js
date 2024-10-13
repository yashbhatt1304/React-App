import promClient from 'prom-client';

const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 5, 10], // Adjust as needed
});

export { httpRequestDurationMicroseconds };