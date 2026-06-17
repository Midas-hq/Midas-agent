# API Reference

All endpoints return JSON.

## Authentication

All endpoints except `/v1/register` and `/v1/topup/webhook` require an `X-API-Key` header.

## Endpoints

### `POST /v1/register`

Create a new account.

**Request Body**:
```json
{"email": "user@example.com"}
```

**Response**:
```json
{
  "api_key": "midas_xxxxxxxx",
  "balance_midas_tokens": 100
}
```

### `POST /v1/run`

Execute a task.

**Request Body**:
```json
{"task": "Your task description"}
```

**Optional Headers**:
- `X-Model`: Force a specific model (e.g., `claude-3.5-sonnet`)
- `X-Anthropic-Key`, `X-OpenAI-Key`, `X-DeepSeek-Key`: Bring your own API keys (bypass billing)

**Response**:
```json
{
  "output": "The answer",
  "model_used": "gpt-5.5-turbo",
  "input_tokens": 15,
  "output_tokens": 8,
  "cost_midas_tokens": 1,
  "remaining_balance": 99,
  "verification": {}
}
```

### `GET /v1/balance`

Check your token balance.

**Response**:
```json
{"balance": 99, "total_used_tokens": 1}
```

### `POST /v1/topup`

Create a Stripe checkout session to add tokens.

**Request Body**:
```json
{"amount_tokens": 1000}
```

**Response**:
```json
{"checkout_url": "https://checkout.stripe.com/..."}
```

### `POST /v1/topup/webhook`

Stripe webhook endpoint (not intended for direct use).

### `POST /v1/tool/execute`

Execute a system tool (cross-platform control).

**Request Body**:
```json
{"tool": "system_info", "params": {}}
```

**Available Tools**: `system_info`, `open_app`, `kill_process`, `lock_screen`, `shutdown`, `android_tap`, `android_screenshot`, `ios_tap`, `ios_screenshot`, `remote_start`, `remote_stop`, `write_file`, `read_file`, `deploy_app`, `execute_skill`, `generate_skill`.

### `POST /v1/skill/generate`

Generate a new skill from description.

**Request Body**:
```json
{"description": "a skill that calculates factorial"}
```

### `POST /v1/skill/evolve`

Evolve a skill based on usage feedback.

**Request Body**:
```json
{"skill_name": "factorial_skill"}
```

### `GET /v1/evolution/stats`

View current model weights (genes).

**Response**:
```json
{"genes": []}
```

### `POST /v1/evolution/trigger`

Manually trigger an evolution cycle.

## Error Codes

| Code | Meaning                       |
|------|-------------------------------|
| 401  | Missing or invalid API key    |
| 402  | Insufficient balance          |
| 400  | Malformed request             |
| 500  | Internal server error         |
