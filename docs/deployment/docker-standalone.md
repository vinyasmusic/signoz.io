---
title: Docker Standalone
description: Learn how to install SigNoz on Docker Standalone
id: docker-standalone
slug: /deployment/docker
---

import CloneRepo from '../shared/clone-repo.md'

SigNoz recommends you use  the `install.sh` script if you're on macOS or one of the following Linux distributions:
- Ubuntu
- Debian
- OpenSuse
- CentOS
- SUSE Linux Enterprise Server (SLES)

:::warning
If you're using a different Linux distro, see the ...
:::

## Prerequisites

- A Linux or macOS machine.
- [Docker](https://docs.docker.com/get-docker/). A minimum of 2GB of memory must be allocated to Docker.
- [GitHub CLI](https://github.com/cli/cli)
- Ensure that the port `3000` is open on the machine where you install SigNoz.

## Install SigNoz Using the Install Script

1. <CloneRepo />

2. Run the `install.sh` script:

  ```bash
./install.sh
  ```

## Verify the Installation

1. Ensure that your containers are running correctly. To view the status of your containers, run the following command:

  ```bash
docker ps
  ```
  The output should look similar to the following::

  ```output
CONTAINER ID   IMAGE                                             COMMAND                  CREATED         STATUS                   PORTS                                                                                                                                                                                                                NAMES
b8b6d1c34dda   signoz/frontend:0.5.4                             "nginx -g 'daemon of…"   3 minutes ago   Up 2 minutes             80/tcp, 0.0.0.0:3000->3000/tcp                                                                                                                                                                                       frontend
1472604ef590   signoz/otelcontribcol:0.4.2                       "/otelcontribcol --c…"   3 minutes ago   Up 2 minutes             4317/tcp, 55679-55680/tcp                                                                                                                                                                                            clickhouse-setup-otel-collector-metrics-1
403b01d1a48d   signoz/query-service:0.5.4                        "./query-service -co…"   3 minutes ago   Up 2 minutes             0.0.0.0:8080->8080/tcp                                                                                                                                                                                               query-service
2c73764cc207   signoz/otelcontribcol:0.4.2                       "/otelcontribcol --c…"   3 minutes ago   Up 2 minutes             0.0.0.0:1777->1777/tcp, 0.0.0.0:4317->4317/tcp, 0.0.0.0:8889->8889/tcp, 0.0.0.0:14268->14268/tcp, 0.0.0.0:55679-55681->55679-55681/tcp, 0.0.0.0:8887->8888/tcp, 0.0.0.0:63639->13133/tcp, 0.0.0.0:63640->55678/tcp   clickhouse-setup-otel-collector-1
0cefda7860b7   grubykarol/locust:1.2.3-python3.9-alpine3.12      "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes             5557-5558/tcp, 0.0.0.0:8089->8089/tcp                                                                                                                                                                                load-hotrod
cf8f324d622c   signoz/alertmanager:0.5.0                         "/bin/alertmanager -…"   3 minutes ago   Up 3 minutes             0.0.0.0:9093->9093/tcp                                                                                                                                                                                               clickhouse-setup-alertmanager-1
edf3143e6ab5   altinity/clickhouse-server:21.8.12.1.testingarm   "/entrypoint.sh"         3 minutes ago   Up 3 minutes (healthy)   0.0.0.0:8123->8123/tcp, 9009/tcp, 0.0.0.0:9001->9000/tcp                                                                                                                                                             clickhouse-setup-clickhouse-1
138c12f70f33   jaegertracing/example-hotrod:latest               "/go/bin/hotrod-linu…"   3 minutes ago   Up 3 minutes             8081-8083/tcp, 0.0.0.0:9000->8080/tcp                                                                                                                                                                                hotrod
  ```

2. Wait for all the pods to be in running state, and then point your browser to `http://<IP-ADDRESS>:3000/` to access the dashboard, replacing `<IP-ADDRESS>` with the IP address of the machine where you installed SigNoz. You should see a page similar to the one in the image below:


## Install SigNoz Using Docker Compose

:::info
Before you install Signoz, make sure that Docker Compose is installed on your machine. See the ...
:::

1. <CloneRepo />

## Related Topics

- [Troubleshooting](/docs/deployment/troubleshooting)

## Next Steps

- [Instrument your application](/docs/instrumentation/overview)