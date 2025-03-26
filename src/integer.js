import { useNegate } from '@mpietrucha/function'
import { isInteger } from 'lodash-es'

export { isInteger }

export class Integer {}

export const notInteger = useNegate(isInteger)
