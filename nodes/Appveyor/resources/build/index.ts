import type { INodeProperties } from 'n8n-workflow';

export const buildDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Build"
					]
				}
			},
			"options": [
				{
					"name": "Get Build Artifacts",
					"value": "Get Build Artifacts",
					"action": "Get build artifacts",
					"description": "Get build artifacts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/buildjobs/{{$parameter[\"jobId\"]}}/artifacts"
						}
					}
				},
				{
					"name": "Get Build Artifact",
					"value": "Get Build Artifact",
					"action": "Download build artifact",
					"description": "Download build artifact",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/buildjobs/{{$parameter[\"jobId\"]}}/artifacts/{{$parameter[\"artifactFileName\"]}}"
						}
					}
				},
				{
					"name": "Get Build Log",
					"value": "Get Build Log",
					"action": "Download build log",
					"description": "Download build log",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/buildjobs/{{$parameter[\"jobId\"]}}/log"
						}
					}
				},
				{
					"name": "Cancel Build",
					"value": "Cancel Build",
					"action": "Cancel build",
					"description": "Cancel build",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/builds/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/{{$parameter[\"buildVersion\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /buildjobs/{jobId}/artifacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Build"
					],
					"operation": [
						"Get Build Artifacts"
					]
				}
			}
		},
		{
			"displayName": "GET /buildjobs/{jobId}/artifacts/{artifactFileName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Build"
					],
					"operation": [
						"Get Build Artifact"
					]
				}
			}
		},
		{
			"displayName": "GET /buildjobs/{jobId}/log",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Build"
					],
					"operation": [
						"Get Build Log"
					]
				}
			}
		},
		{
			"displayName": "DELETE /builds/{accountName}/{projectSlug}/{buildVersion}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Build"
					],
					"operation": [
						"Cancel Build"
					]
				}
			}
		},
];
