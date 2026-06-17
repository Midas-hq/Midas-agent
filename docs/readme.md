# Midas Agent Documentation

Welcome to the official documentation for **Midas Agent** — a production‑grade AI agent platform with long‑term memory, self‑evolution, and cross‑platform control.

This documentation is designed for developers, researchers, and anyone interested in integrating or extending Midas Agent.

---

## 📚 Documentation Overview

| Section | Description |
|---------|-------------|
| [Getting Started](getting-started.md) | Quick start guide, registration, and your first API call |
| [API Reference](api-reference.md) | Complete API endpoints, request/response formats, and error codes |
| [Architecture](architecture.md) | System design, components, and data flow |
| [Supported Models](models.md) | List of all models, roles (Planner/Worker/Fallback), and customization |
| [Self‑Evolution Engine](self-evolution.md) | How genes, capsules, advantage learning, and evolution cycles work |
| [Deployment Guide](deployment.md) | Self‑hosting with Docker, environment variables, and security |
| [Examples](../examples/) | Curl, Python, and JavaScript usage examples |

---

## 🔑 Quick Links

- [Main Repository](https://github.com/Midas-hq/midas-agent)
- [SDK for Python](../sdk/python/)
- [SDK for JavaScript](../sdk/javascript/)
- [Issue Tracker](https://github.com/Midas-hq/midas-agent/issues)
- [Discussions](https://github.com/Midas-hq/midas-agent/discussions)

---

## 🚀 Getting Started in 30 Seconds

```bash
# Register for an API key
curl -X POST https://api.midas-agent.com/v1/register \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com"}'

# Make your first request
curl -X POST https://api.midas-agent.com/v1/run \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"task": "Hello, world!"}'
