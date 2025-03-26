import { useNegate } from '@mpietrucha/function'
import { isString } from 'lodash-es'

export { isString }

export const notString = useNegate(isString)
