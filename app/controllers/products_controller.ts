// import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index() {
    // we want to return a paginated list of posts
    return { message: `Show index` };
  }

  async store() {
    // we want to save a post
    return { message: `Show store` };
  }

  async show() {
    // we want to return a post by its id
    return { message: `Show show` };
  }
}