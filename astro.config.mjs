// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Danube Messaging',
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
                    ],
                },
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Quickstart', slug: 'getting-started/quickstart' },
                        { label: 'Broker Modes', slug: 'getting-started/broker-modes' },
                        { label: 'Run Locally', slug: 'getting-started/local' },
                        { label: 'Docker Compose', slug: 'getting-started/docker-compose' },
                        { label: 'Kubernetes', slug: 'getting-started/kubernetes' },
                    ],
                },
                {
                    label: 'Concepts',
                    items: [
                        { label: 'Topics & Partitions', slug: 'concepts/topics' },
                        { label: 'Subscriptions', slug: 'concepts/subscriptions' },
                        { label: 'Dispatch Strategies', slug: 'concepts/dispatch-strategies' },
                        { label: 'Messages & Schemas', slug: 'concepts/messages' },
                        { label: 'Persistence & Storage', slug: 'concepts/persistence' },
                        { label: 'Scaling the Cluster', slug: 'concepts/scaling' },
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
            ],
        }),
    ],

    adapter: cloudflare({
        imageService: 'compile',
    }),
});