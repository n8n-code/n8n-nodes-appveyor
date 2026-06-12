import type { INodeProperties } from 'n8n-workflow';

export const roleDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					]
				}
			},
			"options": [
				{
					"name": "Get Roles",
					"value": "Get Roles",
					"action": "Get roles",
					"description": "Get roles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roles"
						}
					}
				},
				{
					"name": "Delete Role",
					"value": "Delete Role",
					"action": "Delete role",
					"description": "Delete role",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roles/{{$parameter[\"roleId\"]}}"
						}
					}
				},
				{
					"name": "Get Role",
					"value": "Get Role",
					"action": "Get role",
					"description": "Get role",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roles/{{$parameter[\"roleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Get Roles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roles/{roleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Delete Role"
					]
				}
			}
		},
		{
			"displayName": "GET /roles/{roleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Get Role"
					]
				}
			}
		},
];
