import { type SchemaTypeDefinition } from 'sanity'
import { director } from './director'
import { slider } from './slider'
import { form } from './form'
import { job } from './job'
import { management } from './management'
import { testimonial } from './testimonial'
import { fund } from './fund'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [director, slider, form, job, management, testimonial, fund],
}
