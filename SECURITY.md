# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this website or its services, please report it responsibly to **blucatdev@gmail.com**.

**Please do NOT:**
- Open a public GitHub issue for security vulnerabilities
- Post about vulnerabilities on social media
- Publicly disclose the vulnerability before we have had reasonable time to respond

## What to Include

When reporting a vulnerability, please provide:
1. A detailed description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact
4. Suggested remediation (if any)
5. Your contact information for follow-up

## Response Timeline

We aim to:
- Acknowledge your report within **48 hours**
- Provide an initial assessment within **7 days**
- Deploy a fix or workaround within **30 days** for critical issues
- Keep you informed throughout the remediation process

## Scope

This security policy applies to:
- The website at [https://blucatdev.com](https://blucatdev.com)
- Any APIs or services hosted under the blucatdev.com domain

## Out of Scope

The following are typically out of scope:
- Vulnerabilities in third-party libraries (report directly to maintainers or via CVE channels)
- Vulnerabilities in GitHub Pages or Cloudflare infrastructure (report to respective providers)
- Social engineering or phishing attacks
- Physical security issues
- Issues affecting only outdated browsers with known, unpatched vulnerabilities

## Security Standards Compliance

This website implements the following security standards:
- **OWASP Top 10:2025** — Secure against the most critical web vulnerabilities
- **Australian Privacy Act 1988 (as amended 2024)** — Compliant with Australian privacy law
- **NIST Guidelines** — Security best practices for cryptography, access control, and incident response
- **HTTP Security Headers** — CSP, HSTS, X-Content-Type-Options, and more

## Known Security Measures

Our website includes:
- HTTPS/TLS 1.2+ encryption for all connections
- Content Security Policy (CSP) to prevent XSS and code injection
- HTTP Strict Transport Security (HSTS) to prevent protocol downgrade
- X-Frame-Options and X-Content-Type-Options headers
- Referrer-Policy to control information leakage
- Permissions-Policy to disable unnecessary browser features
- Security headers configured on all responses

## Data Protection

- No personal data is collected via automated tracking
- Server logs are retained for security purposes only (90 days minimum)
- All data in transit is encrypted
- Sensitive information is never logged in plaintext
- Privacy policy available at [/PRIVACY.md](/PRIVACY.md)

## Incident Response

In the event of a confirmed security incident:
1. We will assess the severity and scope
2. We will work to remediate the issue
3. We will notify affected parties as required by law
4. We will publish a post-incident report (if applicable)

## Contact

**Security Contact:** blucatdev@gmail.com

---

*Last Updated: 24 June 2026*  
*Next Review: 24 June 2027*

**Your security matters. Thank you for helping keep this website safe.**
