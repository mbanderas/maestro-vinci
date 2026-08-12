# Security policy

## Supported versions

Security fixes are applied to the latest published release. Older releases may not receive backports.

## Report a vulnerability

Use GitHub's private security-advisory flow for this repository. Do not disclose a vulnerability in a public issue before a fix is available.

Include:

- the affected version and host;
- the exact installation or invocation path;
- reproduction steps;
- expected and observed behavior;
- impact and affected files;
- a minimal proof of concept when safe.

Do not include live credentials, private customer data, unpublished designs, or another person's personal information.

## Security boundary

Vinci contains Markdown, JSON, YAML, images, and local Node.js release tooling. The runtime skill has no project-operated server, database, telemetry endpoint, authentication system, or bundled MCP server.

The installer writes only to an explicitly selected skill destination. It refuses to replace a different existing installation unless `--force` is provided. A dry-run mode shows destinations without writing.

The host application, model provider, browser controller, image generator, renderer, package registry, and operating system remain separate security boundaries governed by their own controls.
