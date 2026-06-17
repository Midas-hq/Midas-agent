# Deployment Guide

Midas Agent can be deployed in three ways:

## 1. Use Our Hosted Service (Easiest)
Sign up at [app.midas-agent.com](https://app.midas-agent.com) and get your API key instantly.

## 2. Self-Host with Docker (Recommended for Production)
We provide a pre-built Docker image that includes the entire backend.

```bash
docker run -d -p 8000:8000 --name midas-agent midas-agent/server:latest
```

Environment variables can be passed with `-e` or via an `.env` file.

## 3. Local Development
For development, you can run the service locally (requires Python 3.10+ and a C++ compiler). Clone the private repository and follow the instructions there.

## Security Considerations
- Always use HTTPS in production.
- Keep your API keys secure.
- Regularly update the Docker image to get the latest security patches.
