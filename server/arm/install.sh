#!/bin/bash
set -e

# This is just example
# Create az group
az group create -n rebood -l westeurope

#Apply arm template to create AKS
az group deployment create -g rebood \
  --template-file aks.json \
  --parameters aks.params.json
