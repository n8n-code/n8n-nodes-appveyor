import type { INodeProperties } from 'n8n-workflow';

export const environmentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Environment"
					]
				}
			},
			"options": [
				{
					"name": "Get Environments",
					"value": "Get Environments",
					"action": "Get environments",
					"description": "Get environments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/environments"
						}
					}
				},
				{
					"name": "Delete Environment",
					"value": "Delete Environment",
					"action": "Delete environment",
					"description": "Delete environment",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/environments/{{$parameter[\"deploymentEnvironmentId\"]}}"
						}
					}
				},
				{
					"name": "Get Environment Deployments",
					"value": "Get Environment Deployments",
					"action": "Get environment deployments",
					"description": "Get environment deployments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/environments/{{$parameter[\"deploymentEnvironmentId\"]}}/deployments"
						}
					}
				},
				{
					"name": "Get Environment Settings",
					"value": "Get Environment Settings",
					"action": "Get environment settings",
					"description": "Get environment settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/environments/{{$parameter[\"deploymentEnvironmentId\"]}}/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /environments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environment"
					],
					"operation": [
						"Get Environments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /environments/{deploymentEnvironmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environment"
					],
					"operation": [
						"Delete Environment"
					]
				}
			}
		},
		{
			"displayName": "GET /environments/{deploymentEnvironmentId}/deployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environment"
					],
					"operation": [
						"Get Environment Deployments"
					]
				}
			}
		},
		{
			"displayName": "GET /environments/{deploymentEnvironmentId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environment"
					],
					"operation": [
						"Get Environment Settings"
					]
				}
			}
		},
];
