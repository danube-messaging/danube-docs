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
                src: './src/assets/Danube_Logo_no_color.png',
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
            ],
        }),
    ],

    adapter: cloudflare({
        imageService: 'compile',
    }),
});