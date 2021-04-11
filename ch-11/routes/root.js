'use strict'

const { promisify } = require('util')

function timeout(ms) {
  return new Promise(resolve => setTimeout(() => { resolve('hi') }, ms));
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { id } = request.query
    const hi = await timeout(8000)
    console.log(hi)
    return 'holi'
  })
}
