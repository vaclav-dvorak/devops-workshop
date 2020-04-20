#!/bin/bash
set -e

helm tiller start-ci
helm install --name traefik --namespace kube-system --values traefik.yml stable/traefik
helm install --name workshop-test --namespace workshop-test ./charts/devops-workshop
helm tiller stop