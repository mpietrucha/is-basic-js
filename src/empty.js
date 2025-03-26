import { isEmpty, negate } from 'lodash-es'

export { isEmpty }

export class Empty {}

export const notEmpty = negate(isEmpty)
