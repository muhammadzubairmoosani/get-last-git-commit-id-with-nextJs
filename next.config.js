const { determineBuildId } = require('./build-id')

module.exports = {
    publicRuntimeConfig: {
        generateBuildId: async () => {
            const buildId = await determineBuildId()
            return buildId
        }
    },

    // serverRuntimeConfig: {
    //     generateBuildId: async () => {
    //         const buildId = await determineBuildId()
    //         return buildId
    //     }
    // },
}