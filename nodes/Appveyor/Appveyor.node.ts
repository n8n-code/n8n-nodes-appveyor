import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { collaboratorDescription } from './resources/collaborator';
import { roleDescription } from './resources/role';
import { userDescription } from './resources/user';
import { buildDescription } from './resources/build';
import { projectDescription } from './resources/project';
import { deploymentDescription } from './resources/deployment';
import { environmentDescription } from './resources/environment';

export class Appveyor implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Appveyor',
                name: 'N8nDevAppveyor',
                icon: { light: 'file:./appveyor.png', dark: 'file:./appveyor.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'AppVeyor is a hosted CI service running on Microsoft.',
                defaults: { name: 'Appveyor' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAppveyorApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Collaborator",
					"value": "Collaborator",
					"description": ""
				},
				{
					"name": "Role",
					"value": "Role",
					"description": ""
				},
				{
					"name": "User",
					"value": "User",
					"description": ""
				},
				{
					"name": "Build",
					"value": "Build",
					"description": ""
				},
				{
					"name": "Project",
					"value": "Project",
					"description": ""
				},
				{
					"name": "Deployment",
					"value": "Deployment",
					"description": ""
				},
				{
					"name": "Environment",
					"value": "Environment",
					"description": ""
				}
			],
			"default": ""
		},
		...collaboratorDescription,
		...roleDescription,
		...userDescription,
		...buildDescription,
		...projectDescription,
		...deploymentDescription,
		...environmentDescription
                ],
        };
}
