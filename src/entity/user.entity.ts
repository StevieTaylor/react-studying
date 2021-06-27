/*
 * @Author: Stevie
 * @Date: 2021-03-29 15:57:04
 * @LastEditTime: 2021-06-25 18:02:08
 * @LastEditors: Stevie
 * @Description:
 * @FilePath: /react-learning-demo/src/entity/user.entity.ts
 */
export interface IUser {
  name: string;
  gender: string;
  age: number;
  birthday: string;
  city: string;
  zipcode: string;
}

export interface IUserInfo {
  name: string;
  age: number;
  gender: string;
}
