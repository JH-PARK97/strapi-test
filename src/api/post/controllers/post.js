// @ts-nocheck
'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    async create(ctx) {
        ctx.request.body['data'] = { ...ctx.request.body['data'], user: ctx.state.user.id }

        const result = await super.create(ctx);
        return result;
    }
}));
