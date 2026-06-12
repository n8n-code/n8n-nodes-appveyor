import type { INodeProperties } from 'n8n-workflow';

export const projectDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					]
				}
			},
			"options": [
				{
					"name": "Get Projects",
					"value": "Get Projects",
					"action": "Get projects",
					"description": "Get projects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects"
						}
					}
				},
				{
					"name": "Delete Project",
					"value": "Delete Project",
					"action": "Delete project",
					"description": "Delete project",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}"
						}
					}
				},
				{
					"name": "Get Project Last Build",
					"value": "Get Project Last Build",
					"action": "Get project last build",
					"description": "Get project last build",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}"
						}
					}
				},
				{
					"name": "Get Project Artifact",
					"value": "Get Project Artifact",
					"action": "Get last successful build artifact",
					"description": "The `job` parameter is mandatory if the build contains multiple jobs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/artifacts/{{$parameter[\"artifactFileName\"]}}"
						}
					}
				},
				{
					"name": "Get Project Last Build Branch",
					"value": "Get Project Last Build Branch",
					"action": "Get project last branch build",
					"description": "Get project last branch build",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/branch/{{$parameter[\"buildBranch\"]}}"
						}
					}
				},
				{
					"name": "Get Project Build By Version",
					"value": "Get Project Build By Version",
					"action": "Get project build by version",
					"description": "Get project build by version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/build/{{$parameter[\"buildVersion\"]}}"
						}
					}
				},
				{
					"name": "Delete Project Build Cache",
					"value": "Delete Project Build Cache",
					"action": "Delete project build cache",
					"description": "Delete project build cache",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/buildcache"
						}
					}
				},
				{
					"name": "Get Project Deployments",
					"value": "Get Project Deployments",
					"action": "Get project deployments",
					"description": "Get project deployments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/deployments"
						}
					}
				},
				{
					"name": "Get Project Settings",
					"value": "Get Project Settings",
					"action": "Get project settings",
					"description": "Get project settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/settings"
						}
					}
				},
				{
					"name": "Get Project Environment Variables",
					"value": "Get Project Environment Variables",
					"action": "Get project environment variables",
					"description": "Get project environment variables",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/settings/environment-variables"
						}
					}
				},
				{
					"name": "Get Project Settings Yaml",
					"value": "Get Project Settings Yaml",
					"action": "Get project settings in YAML",
					"description": "Get project settings in YAML",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"accountName\"]}}/{{$parameter[\"projectSlug\"]}}/settings/yaml"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "DELETE /projects/{accountName}/{projectSlug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Last Build"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/artifacts/{artifactFileName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Artifact"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/branch/{buildBranch}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Last Build Branch"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/build/{buildVersion}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Build By Version"
					]
				}
			}
		},
		{
			"displayName": "DELETE /projects/{accountName}/{projectSlug}/buildcache",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Delete Project Build Cache"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/deployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Deployments"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/settings/environment-variables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Environment Variables"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{accountName}/{projectSlug}/settings/yaml",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Settings Yaml"
					]
				}
			}
		},
];
