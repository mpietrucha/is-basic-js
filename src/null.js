import { isNull, negate } from 'lodash-es'

export { isNull }

export class Null {}

export const notNull = negate(isNull)
