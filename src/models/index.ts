import { Category } from './Category'
import { Course } from './courses'

Category.hasMany(Course)

Course.belongsTo(Category)

export {
  Category,
  Course
}