'use strict';

/**
 * inclusion router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::inclusion.inclusion');
