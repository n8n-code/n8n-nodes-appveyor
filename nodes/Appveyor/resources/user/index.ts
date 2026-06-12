import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get Users",
					"value": "Get Users",
					"action": "Get users",
					"description": "Get users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Get User Invitations",
					"value": "Get User Invitations",
					"action": "Get user invitations",
					"description": "Get user invitations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/invitations"
						}
					}
				},
				{
					"name": "Cancel User Invitation",
					"value": "Cancel User Invitation",
					"action": "Cancel user invitation",
					"description": "Cancel user invitation",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/invitations/{{$parameter[\"userInvitationId\"]}}"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "Delete user",
					"description": "Delete user",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get user",
					"description": "Get user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "GET /users/invitations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Invitations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/invitations/{userInvitationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Cancel User Invitation"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
];
