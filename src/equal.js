import { useNegate } from '@mpietrucha/function'
import { isEqual } from 'lodash-es'

export { isEqual }

export const notEqual = useNegate(isEqual)
