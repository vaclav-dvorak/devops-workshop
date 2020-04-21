#!/bin/bash
set -e

helm tiller start-ci

helm upgrade --install --name traefik --namespace kube-system --values traefik.yml stable/traefik
helm upgrade --install --namespace devops-workshop-dev --set dockerTag=latest,db.user=rebood_workshop,db.password=WG4NqWzrWgsLtnlI,ingress.hosts={devops-workshop.test.rebood.com} --wait devops-workshop-dev ./charts/devops-workshop

helm tiller stop