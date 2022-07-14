---
id: upgrade-0.10.0
title: Upgrade to 0.10.0
sidebar_label: Upgrade to 0.10.0
---

# Upgrade to 0.10.0 from earlier versions

v0.10.0 is a breaking release which requires data migration, if you are upgrading from an older version then you have to run the data migration scripts to be able to see past data.

## First upgrade to 0.10.0

Follow the platform specific instructions to upgrade to 0.10.0 and above.

Note that the past exceptions/error data will not be visible on the new application until you run the migration script.

- [Docker Standalone](https://signoz.io/docs/operate/docker-standalone/#upgrade)
- [Docker Swarm](https://signoz.io/docs/operate/docker-swarm/#upgrade)
- [Kubernetes](https://signoz.io/docs/operate/kubernetes/#upgrade)

## Steps to run migration script:

### Docker

```bash
docker run --name signoz_migrate --network clickhouse-setup_default \
  -it -d signoz/migrate:0.10 -host=clickhouse -port=9000
```

Steps to check logs:

```bash
docker logs -f signoz_migrate
```

In case of failure and have to run again, make sure to cleanup the container before running the migration script again.

```bash
docker stop signoz_migrate

docker rm signoz_migrate
```

### Kubernetes

```bash
kubectl -n platform run -i -t signoz_migrate --image=signoz/migrate:0.10 \
  -- -host=my-release-clickhouse -port=9000 -userName=admin -password=27ff0399-0d3a-4bd8-919d-17c2181e6fb9
```

Steps to check logs:

```bash
kubectl -n platform logs -f signoz_migrate
```

In case of failure and have to run again, make sure to cleanup the pod before running the migration script again.

```bash
kubectl -n platform delete pod signoz_migrate
```

There are some custom flags which can be enabled based on different usecases.

All the flags below are `optional`

Flags:

- `-port` : Specify port of clickhouse. `default=9000`
- `-host` : Specify host of clickhouse. `default=127.0.0.1`
- `-userName` : Specify user name of clickhouse. `default=default`
- `-password` : Specify password of clickhouse. `default=""`
- `-dropOldTable` : If it is set to true then the old tables will be dropped after data migration is successful `default=true`
- `-service` : If you want to restart the migration starting with the service after it has failed specify the service name with -service. `default=""`
- `-timeNano` : Timestamp in nano after which the migration needs to be restarted. `default=""`