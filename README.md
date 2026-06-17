# 🧠 Midas Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-009688.svg)](https://fastapi.tiangolo.com/)
[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/midas-agent/midas-agent)

**Midas Agent** is a production-ready AI agent platform that combines:

- 🧠 **1B+ Token Long-Term Memory** – Never forget past conversations or context.
- 🔀 **Intelligent Model Routing** – Automatically selects the best model (Claude, GPT, DeepSeek, Qwen, GLM, Gemini, Ollama) based on cost, latency, and success rate.
- 🧬 **Self-Evolution Engine** – Continuously improves its own routing and behavior through genes, capsules, and advantage learning.
- 🛠️ **Cross-Platform Control** – Control Windows, macOS, Linux, Android, and iOS through a unified API.
- 📦 **Skill System** – Generate, execute, and evolve reusable skills with a simple `SKILL.md` format.
- 💰 **Token-Based Billing** – Built-in Stripe integration for user registration and pay-per-use.
- 🔌 **OpenAI-Compatible API** – Plug your existing clients directly into `/v1/run`.

> 🚀 **Why Midas?**
> Unlike pure API aggregators (like OpenRouter), Midas adds an **agent layer** – memory, planning, tool use, and self-improvement – on top of the models you already love.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Long-Term Memory** | 1B+ token memory with BM25 semantic search (sub-millisecond latency). |
| **Multi-Model Router** | Planner / Worker / Fallback roles with weighted adaptive routing. |
| **Self-Evolution** | Genes, capsules, advantage processing, and periodic evolution cycles. |
| **Skill System** | Generate, execute, and evolve skills (5-change limit per evolution). |
| **Cross-Platform** | Control Windows, macOS, Linux, Android (ADB), iOS (iPhone Mirroring). |
| **Billing** | Stripe integration with MIDAS tokens (1000 tokens = $1). |
| **API** | OpenAI-compatible `/v1/run` endpoint with optional model override. |
| **Security** | End-to-end encryption, API key management, rate limiting, and anti-abuse. |

---

## 🧱 Architecture

![Architecture](docs/assets/architecture.png)

*For a detailed explanation, see [Architecture Overview](docs/architecture.md).*

---

## 🚀 Quick Start

### Prerequisites

- Python 3.10+ (for local development)
- Docker & Docker Compose (recommended for production)

### Option 1: Use Our Hosted Service (Recommended)

Sign up at [app.midas-agent.com](https://app.midas-agent.com) to get your API key instantly – no installation required.

### Option 2: Self-Host with Docker

```bash
git clone https://github.com/midas-agent/midas-agent.git
cd midas-agent
docker-compose -f docker/docker-compose.yml up -d
```

The service will be available at http://localhost:8000.

> Note: The full source code is not publicly available. You are using a pre-built Docker image with all core logic included.

---

## 🔑 API Quick Example

### Get Your API Key

```bash
curl -X POST https://api.midas-agent.com/v1/register \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com"}'
```

### Run a Task

```bash
curl -X POST https://api.midas-agent.com/v1/run \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"task": "What is the capital of France?"}'
```

### Force a Specific Model

```bash
curl -X POST https://api.midas-agent.com/v1/run \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "X-Model: claude-3.5-sonnet" \
  -H "Content-Type: application/json" \
  -d '{"task": "Explain quantum computing"}'
```

---

## 📚 Full Documentation

- [Getting Started](docs/getting-started.md)
- [API Reference](docs/api-reference.md)
- [Supported Models](docs/models.md)
- [Self-Evolution Engine](docs/self-evolution.md)
- [Architecture](docs/architecture.md)
- [Deployment Guide](docs/deployment.md)

---

## 🧩 SDKs & Examples

- [Python SDK](examples/python-sdk.py)
- [JavaScript SDK](examples/javascript-sdk.js)
- [curl Examples](examples/curl-examples.md)

---

## 💰 Pricing

Midas uses **MIDAS tokens** as internal currency:

- **1 token = $0.001 USD** (1000 tokens = $1)
- Each API call costs `max(1, (input_tokens + output_tokens) // 1000)` tokens
- New users receive 100 free tokens on signup
- Top up via Stripe (credit card)

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

- Report bugs via Issues
- Suggest features via Discussions
- Submit pull requests (for documentation, SDKs, or examples)

---

## 📄 License

This project uses a **dual-licensing** model:

- **Open-Source Components** — the SDKs, examples, and public documentation in
  this repository are licensed under the **MIT License** (see [LICENSE](LICENSE)).
  You may use, modify, and redistribute them; just keep the copyright notice.
- **Proprietary Software** — the hosted API service, the pre-built Docker image,
  and the agent core (memory, router, self-evolution, skills) are **not**
  open source and are governed by our [End User License Agreement](EULA.md).

In short: the client-side code is MIT; the backend you call or run is licensed,
not owned.

---

## 📧 Contact

- Issues: [GitHub Issues](https://github.com/midas-agent/midas-agent/issues)
- Discussions: [GitHub Discussions](https://github.com/midas-agent/midas-agent/discussions)
- Email: support@midas-agent.com

⭐ Star this repo if you find it useful!
