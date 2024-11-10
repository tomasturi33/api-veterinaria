import Category from '#models/category'
import { createCategoryValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index() {
      // we want to return a paginated list of posts
      return Category.all()
    }
  
    async store({ request }: HttpContext) {
      const payload = await request.validateUsing(createCategoryValidator)
      return Category.create(payload)
    }
  
    async show({ params }: HttpContext) {
      // we want to return a post by its id
      return Category.findOrFail(params.id)
    }
}