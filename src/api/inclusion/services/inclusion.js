'use strict';

/**
 * inclusion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inclusion.inclusion');
