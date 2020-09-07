import { schema } from 'normalizr'

import { Dog } from './types'

const dogSchema = new schema.Entity<Dog>('dogs')

export const dogsSchema = new schema.Array(dogSchema)
