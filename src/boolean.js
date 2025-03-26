import { useNegate } from '@mpietrucha/function'
import { isBoolean } from 'lodash-es'

export { isBoolean }

export const notBoolean = useNegate(isBoolean)
