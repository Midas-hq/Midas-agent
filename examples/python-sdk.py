import requests

API_KEY = "midas_xxxxxxxx"
BASE_URL = "https://api.midas-agent.com"

headers = {
    "X-API-Key": API_KEY,
    "Content-Type": "application/json",
}


def run_task(task, model=None):
    request_headers = dict(headers)
    if model:
        request_headers["X-Model"] = model
    response = requests.post(
        f"{BASE_URL}/v1/run", json={"task": task}, headers=request_headers
    )
    return response.json()


def get_balance():
    response = requests.get(f"{BASE_URL}/v1/balance", headers=headers)
    return response.json()


def execute_tool(tool, params):
    response = requests.post(
        f"{BASE_URL}/v1/tool/execute",
        json={"tool": tool, "params": params},
        headers=headers,
    )
    return response.json()


if __name__ == "__main__":
    print(run_task("What is the capital of France?"))
    print(get_balance())
    print(execute_tool("system_info", {}))
