import { isFunction, negate } from 'lodash-es'

export { isFunction }

export const notFunction = negate(isFunction)
