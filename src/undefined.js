import { isUndefined, negate } from 'lodash-es'

export { isUndefined }

export class Undefined {}

export const notUndefined = negate(isUndefined)
