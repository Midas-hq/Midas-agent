const API_KEY = "midas_xxxxxxxx";
const BASE_URL = "https://api.midas-agent.com";

async function runTask(task, model = null) {
  const headers = {
    "X-API-Key": API_KEY,
    "Content-Type": "application/json",
  };
  if (model) headers["X-Model"] = model;
  const response = await fetch(`${BASE_URL}/v1/run`, {
    method: "POST",
    headers,
    body: JSON.stringify({ task }),
  });
  return response.json();
}

async function getBalance() {
  const response = await fetch(`${BASE_URL}/v1/balance`, {
    headers: { "X-API-Key": API_KEY },
  });
  return response.json();
}

async function executeTool(tool, params) {
  const response = await fetch(`${BASE_URL}/v1/tool/execute`, {
    method: "POST",
    headers: {
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tool, params }),
  });
  return response.json();
}

// Example usage
runTask("What is the capital of France?").then(console.log);
getBalance().then(console.log);
executeTool("system_info", {}).then(console.log);
