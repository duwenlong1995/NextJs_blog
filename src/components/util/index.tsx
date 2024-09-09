import { ReactNode } from 'react'
/************************************ Button label ******************************** */
/**
 *
 * @param modifiers 修饰符数组
 * @param baseClass
 * @returns
 */
export const changedClassNameButton = (modifiers: string, baseClass?: string): string => {
  // 将基础类名和修饰符数组连接成一个字符串
  return [modifiers, [modifiers, baseClass].join('_')].join(' ')
}
/**
 * 判断字段的值，根据条件返回组件
 * @param judgeDom
 * @param icon
 * @returns
 */
export const judgeFn = (judgeDom: ReactNode, icon?: string) => {
  return icon ? judgeDom : null
}
/************************************ Box ******************************** */
/**
 *将默认类名和添加的布局属性通过空格连接成字符串
 * @param modifiers 修饰符数组
 * @param baseClass
 * @returns
 */
export const changedClassName = (modifiers: string[], baseClass?: string): string => {
  // 将基础类名和修饰符数组连接成一个字符串
  return [baseClass, ...modifiers].join(' ')
}
/**
 * 随机指定字符串长度的字母字符串
 * @param length 字符串长度
 * @returns
 */
export const generateRandomString = (length: number): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
/************************************ 公用 ******************************** */
