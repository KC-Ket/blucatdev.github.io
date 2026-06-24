import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Set security headers on all responses
  const response = next();

  return response.then((res) => {
    // Prevent MIME-type sniffing
    res.headers.set('X-Content-Type-Options', 'nosniff');

    // Prevent clickjacking
    res.headers.set('X-Frame-Options', 'DENY');
    res.headers.set('Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "font-src 'self'; " +
      "connect-src 'self'; " +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'"
    );

    // Enable HSTS (Strict-Transport-Security)
    res.headers.set('Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );

    // Prevent XSS in older browsers
    res.headers.set('X-XSS-Protection', '1; mode=block');

    // Control referrer information
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Disable unnecessary browser features
    res.headers.set('Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
    );

    // Additional security headers
    res.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
    res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

    // Remove potentially revealing headers
    res.headers.delete('Server');
    res.headers.delete('X-Powered-By');

    return res;
  });
});
