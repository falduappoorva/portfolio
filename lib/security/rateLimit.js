const buckets = new Map();

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  return realIp || 'unknown';
}

export function createRateLimiter({ windowMs = 60_000, max = 30, keyPrefix = 'api' } = {}) {
  return function rateLimit(request) {
    const now = Date.now();
    const windowStart = now - windowMs;
    const key = `${keyPrefix}:${getClientIp(request)}`;
    const history = buckets.get(key) || [];
    const requestsInWindow = history.filter((timestamp) => timestamp > windowStart);

    requestsInWindow.push(now);
    buckets.set(key, requestsInWindow);

    const limited = requestsInWindow.length > max;
    const remaining = Math.max(0, max - requestsInWindow.length);
    const reset = Math.ceil((windowMs - (now - requestsInWindow[0])) / 1000);

    return {
      limited,
      remaining,
      reset,
      headers: {
        'X-RateLimit-Limit': String(max),
        'X-RateLimit-Remaining': String(remaining),
        'X-RateLimit-Reset': String(Math.max(0, reset))
      }
    };
  };
}