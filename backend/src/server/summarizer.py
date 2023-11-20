import requests
from time import sleep


request_url = "https://api-v2.agenthub.dev/remote_start_pipeline"
response_url = "https://api-v2.agenthub.dev/plrun?run_id="


class Summarizer:
    def __init__(self, agent_hub_key: str, x_auth_key: str):
        self.agent_hub_key = agent_hub_key
        self.headers = {
            "Content-Type": "application/json",
            "x-auth-key": x_auth_key
        }
    
    def summarize(self, urls: list[str]) -> dict | None | bool:
        urls = ",".join([u.strip() for u in urls])
        data = {
			"user_id": "l7Ulx3ThiVNUX1PFEIN8hMAyf182",
			"saved_item_id": "vCvn62QZgZnjxgNMryTS8h",
            "api_key": self.agent_hub_key,
            "pipeline_inputs": [
                {"input_name": "source_urls", "value": urls}
            ]
		}
        runner = requests.post(request_url, headers=self.headers, json=data)
        print(runner.json())
        run_id = runner.json().split("=")[1]
                
        retries = 0
        while retries < 1000:
            print(f"retry: {retries}")
            response = requests.get(response_url + run_id, headers=self.headers).json()
            if response["state"] == "DONE":
                return response["outputs"]["summaries"]
            elif response["state"] == "FAILED":
                return False
            sleep(1)
            retries += 1
            
        return None