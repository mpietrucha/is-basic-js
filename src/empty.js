import { useNegate } from '@mpietrucha/function'
import { isEmpty } from 'lodash-es'

export { isEmpty }

export class Empty {}

export const notEmpty = useNegate(isEmpty)
