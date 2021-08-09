/*
 * @Author: Stevie
 * @Date: 2021-03-29 15:57:04
 * @LastEditTime: 2021-08-09 15:34:45
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

export interface IGithubUser {
  id: number;
  avatar_url: string;
  login: string;
  html_url: string;
}