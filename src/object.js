import { useNegate } from '@mpietrucha/function'
import { isObject } from 'lodash-es'

export { isObject }

export const notObject = useNegate(isObject)
