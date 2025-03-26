import { isString, negate } from 'lodash-es'

export { isString }

export const notString = negate(isString)
