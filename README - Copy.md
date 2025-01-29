# GU Tools
This project provides tools for managing and accessing GU resources. It includes authentication and secret management using Azure Key Vault.

## Prerequisites
- [Node.js](https://nodejs.org/) (version 16.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Python](https://www.python.org/) (version 3.12 or later)
- [pip](https://pip.pypa.io/en/stable/) (comes with Python)

# Run locally on streamlit
1. For the app to run locally, a file named ".env" in the root directory containing secrets is required. Contact the owner of the repository for the content of the ".env" file.
2. Install requirements in a PowerShell terminal:
    ```sh
    pip install -r requirements.txt
    cd auth; npm install; cd ..
    ```
3. Start the proxy server in a new terminal:
    ```sh
    node auth/proxy.mjs
    ```
4. Run Streamlit app in a new terminal:
    ```sh
    streamlit run streamlit_app.py --server.port 8502 --server.maxUploadSize 500
    ```
5. Open the app on the proxy server:
    - Local URL: [http://localhost:8000](http://localhost:8000)
    - Network URL: [http://172.16.39.205:8000](http://172.16.39.205:8000)

# Docker Instructions
1. Build the Docker image:
    ```sh
    docker build -t gu_tools --build-arg keyVaultName=nogeoDev .
    ```
2. Run the Docker image locally:
    ```sh
    docker-compose -f docker-compose-local.yml up --build
    ```