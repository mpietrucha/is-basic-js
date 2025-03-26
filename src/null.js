import { useNegate } from '@mpietrucha/function'
import { isNull } from 'lodash-es'

export { isNull }

export class Null {}

export const notNull = useNegate(isNull)
