import { isInteger, negate } from 'lodash-es'

export { isInteger }

export class Integer {}

export const notInteger = negate(isInteger)
