import { dirname, join, resolve } from "path";

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}

const config = {
    stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {},
    },

    core: {},

    async viteFinal(config, { configType }) {
        // customize the Vite config here
        return {
            ...config,
            define: {
                "process.env": {},
                global: {},
            },
            resolve: {
                alias: [
                    {
                        find: "ui",
                        replacement: resolve(__dirname, "../../../packages/ui/"),
                    },
                    {
                        find: "react",
                        replacement: resolve(__dirname, "../../../node_modules/react"),
                    },
                ],
            },
        };
    },

    docs: {
        autodocs: true,
    },
};

export default config;
