import { type SchemaTypeDefinition } from 'sanity'
import { director } from './director'
import { slider } from './slider'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [director, slider],
}
