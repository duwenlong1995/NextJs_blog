import { ReactNode } from "react";

/************************************ Button label ******************************** */
/**
 *
 * @param modifiers 修饰符数组
 * @param baseClass
 * @returns
 */
export const changedClassNameButton = (modifiers: string, baseClass?: string): string => {
  // 将基础类名和修饰符数组连接成一个字符串
  return [modifiers, [modifiers, baseClass].join("_")].join(" ");
};
/**
 * 判断字段的值，根据条件返回组件
 * @param judgeDom
 * @param icon
 * @returns
 */
export const judgeFn = (judgeDom: ReactNode, icon?: string) => {
  return icon ? judgeDom : null;
};
