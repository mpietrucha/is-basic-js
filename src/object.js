import { isObject, negate } from 'lodash-es'

export { isObject }

export const notObject = negate(isObject)
