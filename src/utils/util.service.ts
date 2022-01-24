/*
 * @Author: Stevie
 * @Date: 2021-05-09 22:27:09
 * @LastEditTime: 2022-01-24 17:26:50
 * @LastEditors: Stevie
 * @Description: 工具服务
 */
/**
 * @description: 获取类型
 * @param {unknown} object
 * @return {*}
 */
export const getType = (object: unknown): string => {
  let type = typeof object
  if (type !== 'object') {
    return type
  }
  return Object.prototype.toString.call(object).replace(/^\[object (\S+)]$/, '$1')
}

export const debounce = (func: Function, wait: number, immediate: boolean) => {
  let timer: any = null;
  let context = this
  let _immediate = immediate
  return function () {
    if (_immediate) {
      func.apply(context, arguments)
      _immediate = false
    } else {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function () {
        func.apply(context, arguments)
      }, 1000 * wait)
    }
  }
}

/**
 * @description: 根据枚举value获得key
 * @param {*}
 * @return {*}
 */
export function getEnumKeyByValue<Key extends string, Value extends string | number>(
  _enum: { [k in Key]: Value },
  value: Value
): string {
  const keys = (Object.keys(_enum) as Key[]).filter((x) => _enum[x] === value)
  return keys.length > 0 ? keys[0] : ''
}

export const getRandomString = () => {
  return Math.random().toString(36).slice(2)
}
