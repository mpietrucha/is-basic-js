import { useNegate } from '@mpietrucha/function'
import { isArray } from 'lodash-es'

export { isArray }

export const notArray = useNegate(isArray)
