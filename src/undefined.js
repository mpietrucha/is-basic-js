import { useNegate } from '@mpietrucha/function'
import { isUndefined } from 'lodash-es'

export { isUndefined }

export class Undefined {}

export const notUndefined = useNegate(isUndefined)
