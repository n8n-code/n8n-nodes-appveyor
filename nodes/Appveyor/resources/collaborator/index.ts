import type { INodeProperties } from 'n8n-workflow';

export const collaboratorDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collaborator"
					]
				}
			},
			"options": [
				{
					"name": "Get Collaborators",
					"value": "Get Collaborators",
					"action": "Get collaborators",
					"description": "Get collaborators",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collaborators"
						}
					}
				},
				{
					"name": "Delete Collaborator",
					"value": "Delete Collaborator",
					"action": "Delete collaborator",
					"description": "Delete collaborator",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/collaborators/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get Collaborator",
					"value": "Get Collaborator",
					"action": "Get collaborator",
					"description": "Get collaborator",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collaborators/{{$parameter[\"userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /collaborators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collaborator"
					],
					"operation": [
						"Get Collaborators"
					]
				}
			}
		},
		{
			"displayName": "DELETE /collaborators/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collaborator"
					],
					"operation": [
						"Delete Collaborator"
					]
				}
			}
		},
		{
			"displayName": "GET /collaborators/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collaborator"
					],
					"operation": [
						"Get Collaborator"
					]
				}
			}
		},
];
