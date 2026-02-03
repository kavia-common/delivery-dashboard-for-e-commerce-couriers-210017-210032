#!/bin/bash
cd /home/kavia/workspace/code-generation/delivery-dashboard-for-e-commerce-couriers-210017-210032/delivery_dashboard_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

