# Getting Started with Midas Agent

This guide will walk you through the first steps to use Midas Agent.

## Step 1: Get Your API Key

Register an account:

```bash
curl -X POST https://api.midas-agent.com/v1/register \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com"}'
```

You'll receive an API key and an initial balance of 100 free tokens.

## Step 2: Make Your First Request

Use your API key in the `X-API-Key` header:

```bash
curl -X POST https://api.midas-agent.com/v1/run \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"task": "Hello, world!"}'
```

## Step 3: Check Your Balance

```bash
curl -X GET https://api.midas-agent.com/v1/balance \
  -H "X-API-Key: YOUR_API_KEY"
```

## Step 4: Top Up (Optional)

To add more tokens, use the `/v1/topup` endpoint:

```bash
curl -X POST https://api.midas-agent.com/v1/topup \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"amount_tokens": 1000}'
```

This returns a Stripe checkout URL.

## Next Steps

- Explore the [API Reference](api-reference.md) for advanced usage.
- Learn about [Self-Evolution](self-evolution.md).
- Check out [examples](../examples/) for SDK integration.
