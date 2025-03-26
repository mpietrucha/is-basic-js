import { isArray } from '@/array'
import { isBoolean } from '@/boolean'
import { Empty, isEmpty } from '@/empty'
import { isFunction } from '@/function'
import { Integer, isInteger } from '@/integer'
import { Null, isNull } from '@/null'
import { isNumber } from '@/number'
import { isObject } from '@/object'
import { isString } from '@/string'
import { Undefined, isUndefined } from '@/undefined'

export class Validators {
    static #values = new Map([
        [Null, isNull],
        [Array, isArray],
        [Empty, isEmpty],
        [Number, isNumber],
        [Object, isObject],
        [String, isString],
        [Integer, isInteger],
        [Boolean, isBoolean],
        [Function, isFunction],
        [Undefined, isUndefined],
    ])

    static all() {
        return this.#values
    }

    static has(value) {
        return this.all().has(value)
    }

    static get(value) {
        return this.all().get(value)
    }

    static call(value, ...parameters) {
        return this.has(value) && this.get(value)(...parameters)
    }
}
