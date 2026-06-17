# Supported Models

Midas Agent supports a wide range of models, categorized by role:

| Role        | Models                                                                                  |
|-------------|-----------------------------------------------------------------------------------------|
| **Planner** | Claude Opus 4.8, DeepSeek V4 Pro, Qwen 3.6 27B                                           |
| **Worker**  | GLM 5.1/5.5, DeepSeek V4, Qwen 3.7 Max, GPT 5.5/5.4, Claude 3.5 Sonnet, Ollama LLaMA 3   |
| **Fallback**| Kimi K2.5, Gemini 3.1 Lite, GPT 4.5 Nano                                                 |

You can force a specific model by sending the `X-Model` header with any of these names.

## Custom Models

If you have your own API key, you can use any model supported by that provider (e.g., any OpenAI-compatible endpoint).

## Ollama Integration

Local models (Ollama) are supported at no cost. See the [Deployment Guide](deployment.md) for details.
