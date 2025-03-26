import { isArray, negate } from 'lodash-es'

export { isArray }

export const notArray = negate(isArray)
