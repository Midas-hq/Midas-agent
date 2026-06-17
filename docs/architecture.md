# Architecture Overview

Midas Agent is built as a layered system with three core components:

## 1. API Gateway (FastAPI)
- Handles authentication (API key validation)
- Rate limiting and request routing
- Exposes the `/v1/run` endpoint
- Integrates with Stripe for billing

## 2. Agent Core (Python)
- **Memory**: C++ service with SQLite+FTS5 for long-term storage (1B+ tokens)
- **Router**: Selects the best model (Planner/Worker/Fallback) based on cost, latency, and past success
- **Evolution**: Uses genes, capsules, and advantage processing to improve routing over time
- **Skills**: Executes and generates reusable skills (SKILL.md format)
- **Tools**: Cross-platform control (system commands, Android ADB, iOS Mirroring)

## 3. Downstream Models
- Claude, GPT, DeepSeek, Qwen, GLM, Gemini, Ollama, etc.
- Each model has a role (Planner/Worker/Fallback) and a weighted score.

## Data Flow

```
User → API Gateway (auth + rate limit) → Agent Core → Model Router
     → Chosen Model → Response → (optional) Memory storage & feedback logging
```

## Security

- All API keys are encrypted at rest.
- Communication is TLS-encrypted.
- Rate limiting and IP blacklisting are in place.
