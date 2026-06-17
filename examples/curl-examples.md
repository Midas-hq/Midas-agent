# curl Examples

## Register
```bash
curl -X POST https://api.midas-agent.com/v1/register \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

## Run a Task
```bash
curl -X POST https://api.midas-agent.com/v1/run \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"task": "What is the capital of France?"}'
```

## Force a Specific Model
```bash
curl -X POST https://api.midas-agent.com/v1/run \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "X-Model: deepseek-v4-pro" \
  -H "Content-Type: application/json" \
  -d '{"task": "Write a Python function for factorial"}'
```

## Check Balance
```bash
curl -X GET https://api.midas-agent.com/v1/balance \
  -H "X-API-Key: YOUR_API_KEY"
```

## Top Up
```bash
curl -X POST https://api.midas-agent.com/v1/topup \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"amount_tokens": 1000}'
```

## Execute a Tool
```bash
curl -X POST https://api.midas-agent.com/v1/tool/execute \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"tool": "system_info", "params": {}}'
```

## Generate a Skill
```bash
curl -X POST https://api.midas-agent.com/v1/skill/generate \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"description": "a skill that extracts email addresses from text"}'
```
