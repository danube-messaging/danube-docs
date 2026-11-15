// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [starlightImageZoom()],
            title: 'Danube Messaging',
            favicon: '/favicon.png',
            logo: {
                src: './src/assets/Danube_black_square.png',
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/danube-messaging/danube' }],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'What is Danube?', slug: 'introduction/what-is-danube' },
                        { label: 'Quickstart', slug: 'getting-started/quickstart' },
                        { label: 'Danube for AI Agents', slug: 'ai-agents/overview' },
                        { label: 'Key Concepts', slug: 'introduction/key-concepts' },
                    ],
                },
                {
                    label: 'Run Danube',
                    items: [
                        { label: 'The danube CLI', slug: 'getting-started/the-danube-cli' },
                        { label: 'Node Modes', slug: 'getting-started/broker-modes' },
                        { label: 'Configure Cluster & Topics', slug: 'getting-started/configuration-workflow' },
                        { label: 'Run Locally', slug: 'getting-started/local' },
                        { label: 'Docker Compose', slug: 'getting-started/docker-compose' },
                        { label: 'Kubernetes', slug: 'getting-started/kubernetes' },
                        { label: 'Test with an AI Agent', slug: 'getting-started/ai-agent-testing' },
                    ],
                },
                {
                    label: 'Core Concepts',
                    items: [
                        { label: 'Topics & Partitions', slug: 'concepts/topics' },
                        { label: 'Stream Intents', slug: 'concepts/stream-intents' },
                        { label: 'Subscriptions & Failures', slug: 'concepts/subscriptions' },
                        { label: 'Dispatch Strategies', slug: 'concepts/dispatch-strategies' },
                        { label: 'Messages & Schemas', slug: 'concepts/messages' },
                        { label: 'Persistence', slug: 'concepts/persistence' },
                        { label: 'Scaling', slug: 'concepts/scaling' },
                    ],
                },
                {
                    label: 'Build Apps',
                    items: [
                        { label: 'Client Libraries', slug: 'client-libraries/overview' },
                        { label: 'Setup & Connection', slug: 'client-libraries/setup' },
                        { label: 'Producers', slug: 'client-libraries/producer' },
                        { label: 'Consumers', slug: 'client-libraries/consumer' },
                        { label: 'Key-Shared Ordering', slug: 'client-libraries/key-shared' },
                        { label: 'Schema Registry', slug: 'client-libraries/schema-registry' },
                    ],
                },
                {
                    label: 'Operate',
                    items: [
                        { label: 'Admin Overview', slug: 'admin/overview' },
                        { label: 'Cluster, Brokers & Auth', slug: 'admin/cli-cluster' },
                        { label: 'Topics, Namespaces & Schemas', slug: 'admin/cli-resources' },
                        { label: 'Produce & Consume', slug: 'admin/cli-messaging' },
                        { label: 'Web Console', slug: 'admin/admin-ui' },
                        { label: 'AI Admin (MCP)', slug: 'admin/mcp' },
                    ],
                },
                {
                    label: 'Durability & Storage',
                    collapsed: true,
                    items: [
                        { label: 'Overview', slug: 'durability/overview' },
                        { label: 'Tiered Storage', slug: 'durability/tiered-storage' },
                        { label: 'Storage Configuration', slug: 'durability/configuration' },
                        { label: 'Crash Recovery', slug: 'durability/crash-recovery' },
                    ],
                },
                {
                    label: 'Security',
                    collapsed: true,
                    items: [
                        { label: 'Overview', slug: 'security/overview' },
                        { label: 'TLS & Certificates', slug: 'security/tls' },
                        { label: 'Authentication (JWT)', slug: 'security/authentication' },
                        { label: 'Authorization (RBAC)', slug: 'security/authorization' },
                        { label: 'Securing a Cluster', slug: 'security/securing-a-cluster' },
                    ],
                },
                {
                    label: 'Edge & Lakehouse',
                    collapsed: true,
                    items: [
                        { label: 'Edge Gateway', slug: 'edge/overview' },
                        { label: 'Lakehouse with Iceberg', slug: 'lakehouse/overview' },
                    ],
                },
                {
                    label: 'Architecture',
                    collapsed: true,
                    items: [
                        { label: 'Overview', slug: 'architecture/overview' },
                        { label: 'Schema Registry', slug: 'architecture/schema-registry' },
                        { label: 'Load Manager', slug: 'architecture/load-manager' },
                        { label: 'Key-Shared Dispatch', slug: 'architecture/key-shared' },
                        { label: 'Reliable Topic Move', slug: 'architecture/reliable-topic-move' },
                        { label: 'Metadata Paths', slug: 'architecture/metadata-paths' },
                    ],
                },
                {
                    label: 'Integrations',
                    collapsed: true,
                    items: [
                        { label: 'Danube Connect', slug: 'integrations/danube-connect' },
                        { label: 'Connector Development', slug: 'integrations/connector-development' },
                    ],
                },
                {
                    label: 'Reference',
                    collapsed: true,
                    items: [
                        { label: 'CLI & Configuration', slug: 'reference/broker-configuration' },
                        { label: 'Lakehouse Configuration', slug: 'reference/iceberg-configuration' },
                    ],
                },
                {
                    label: 'Contributing',
                    collapsed: true,
                    items: [
                        { label: 'Contribution Guide', slug: 'contributing' },
                    ],
                },
            ],
        }),
    ],

    adapter: cloudflare({
        imageService: 'compile',
    }),
});
