import type { INodeProperties } from 'n8n-workflow';

export const deploymentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Deployment"
					]
				}
			},
			"options": [
				{
					"name": "Get Deployment",
					"value": "Get Deployment",
					"action": "Get deployment",
					"description": "Get deployment",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deployments/{{$parameter[\"deploymentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deployments/{deploymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deployment"
					],
					"operation": [
						"Get Deployment"
					]
				}
			}
		},
];
