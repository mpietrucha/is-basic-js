import { useNegate } from '@mpietrucha/function'
import { isNumber } from 'lodash-es'

export { isNumber }

export const notNumber = useNegate(isNumber)
