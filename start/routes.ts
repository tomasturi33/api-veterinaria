/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CategoriesController = () => import('#controllers/categories_controller')
const ProductsController = () => import('#controllers/products_controller')

router.get('/', async () => {
  return {
    hello: 'API Veterinaria',
  }
})

router.get('categories', [CategoriesController, 'index'])
router.post('categories', [CategoriesController, 'store'])
router.get('categories/:id', [CategoriesController, 'show'])

router.get('products', [ProductsController, 'index'])
router.post('products', [ProductsController, 'store'])
router.get('products/:id', [ProductsController, 'show'])