---
title: Kubernetes
description: Learn how to install SigNoz on Kubernetes using a Helm chart
id: kubernetes
slug: /deployment/helm_chart/
---

<div class="card-demo">
  <div class="card">
    <div class="card__header">
      <h3>Lorem Ipsum</h3>
    </div>
    <div class="card__body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
    <div class="card__footer">
      <button class="button button--secondary button--block">See All</button>
    </div>
  </div>
</div>

import useBaseUrl from '@docusaurus/useBaseUrl';
import CloneRepo from '../shared/clone-repo.md'

This section provides information on installing SigNoz on Kubernetes using a Helm chart.


##  Prerequisites

* A Kubernetes cluster
* Kubectl. Refer to the [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) page of the Kubernetes documentation for details about installing `kubectl`.
* [Helm](https://helm.sh/docs/intro/install/)


## Install SigNoz on a Kubernetes Cluster

:::info
Perform these steps from a machine which has `kubectl` access to your cluster.
:::info

1. <CloneRepo/>