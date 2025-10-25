import { type SchemaTypeDefinition } from 'sanity'
import { director } from './director'
import { slider } from './slider'
import { form } from './form'
import { job } from './job'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [director, slider, form, job],
}
