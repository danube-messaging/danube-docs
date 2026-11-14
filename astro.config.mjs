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
                    label: 'Introduction',
                    items: [
                        { label: 'What is Danube?', slug: 'introduction/what-is-danube' },
                        { label: 'Key Concepts', slug: 'introduction/key-concepts' },
                        { label: 'Danube for AI Agents', slug: 'ai-agents/overview' },
                    ],
                },
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Quickstart', slug: 'getting-started/quickstart' },
                        { label: 'Broker Modes', slug: 'getting-started/broker-modes' },
                        { label: 'Cluster & Topic Configuration', slug: 'getting-started/configuration-workflow' },
                        { label: 'Run Locally', slug: 'getting-started/local' },
                        { label: 'Docker Compose', slug: 'getting-started/docker-compose' },
                        { label: 'Kubernetes', slug: 'getting-started/kubernetes' },
                        { label: 'AI Agent Testing', slug: 'getting-started/ai-agent-testing' },
                    ],
                },
                {
                    label: 'Concepts',
                    items: [
                        { label: 'Topics & Partitions', slug: 'concepts/topics' },
                        { label: 'Stream Intents & Profiles', slug: 'concepts/stream-intents' },
                        { label: 'Subscriptions & Failure Policies', slug: 'concepts/subscriptions' },
                        { label: 'Dispatch Strategies', slug: 'concepts/dispatch-strategies' },
                        { label: 'Messages & Schemas', slug: 'concepts/messages' },
                        { label: 'Persistence & Storage', slug: 'concepts/persistence' },
                        { label: 'Scaling the Cluster', slug: 'concepts/scaling' },
                    ],
                },
                {
                    label: 'Durability & Storage',
                    items: [
                        { label: 'Overview', slug: 'durability/overview' },
                        { label: 'Tiered Storage', slug: 'durability/tiered-storage' },
                        { label: 'Configuration Guide', slug: 'durability/configuration' },
                        { label: 'Crash Recovery', slug: 'durability/crash-recovery' },
                    ],
                },
                {
                    label: 'Client Libraries',
                    items: [
                        { label: 'Overview', slug: 'client-libraries/overview' },
                        { label: 'Setup & Connection', slug: 'client-libraries/setup' },
                        { label: 'Producer Guide', slug: 'client-libraries/producer' },
                        { label: 'Consumer Guide', slug: 'client-libraries/consumer' },
                        { label: 'Key-Shared Subscriptions', slug: 'client-libraries/key-shared' },
                        { label: 'Schema Registry', slug: 'client-libraries/schema-registry' },
                    ],
                },
                {
                    label: 'Security',
                    items: [
                        { label: 'Overview', slug: 'security/overview' },
                        { label: 'TLS & Certificates', slug: 'security/tls' },
                        { label: 'Authentication (JWT)', slug: 'security/authentication' },
                        { label: 'Authorization (RBAC)', slug: 'security/authorization' },
                        { label: 'Securing a Cluster', slug: 'security/securing-a-cluster' },
                    ],
                },
                {
                    label: 'Administration',
                    items: [
                        { label: 'Overview', slug: 'admin/overview' },
                        { label: 'Admin Dashboard UI', slug: 'admin/admin-ui' },
                        { label: 'AI Admin (MCP)', slug: 'admin/mcp' },
                        { label: 'CLI: Cluster & Brokers', slug: 'admin/cli-cluster' },
                        { label: 'CLI: Resources', slug: 'admin/cli-resources' },
                        { label: 'CLI: Produce & Consume', slug: 'admin/cli-messaging' },
                    ],
                },
                {
                    label: 'Edge',
                    items: [
                        { label: 'Overview', slug: 'edge/overview' },
                    ],
                },
                {
                    label: 'Lakehouse with Iceberg',
                    items: [
                        { label: 'Overview', slug: 'lakehouse/overview' },
                    ],
                },
                {
                    label: 'Architecture',
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
                    items: [
                        { label: 'Danube Connect', slug: 'integrations/danube-connect' },
                        { label: 'Connector Development', slug: 'integrations/connector-development' },
                    ],
                },
                {
                    label: 'Reference',
                    items: [
                        { label: 'Configuration & CLI Reference', slug: 'reference/broker-configuration' },
                        { label: 'Lakehouse Configuration', slug: 'reference/iceberg-configuration' },
                    ],
                },
                {
                    label: 'Contributing',
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