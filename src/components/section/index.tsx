/*
 * @Author: Stevie
 * @Date: 2021-06-29 10:36:54
 * @LastEditTime: 2021-06-29 14:30:43
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import './style';

export interface ISection {
  title: string;
  content: IContent;
}

export interface IContent {
  subtitle?: string;
  items: (IItem | string)[];
}

export interface IItem {
  description: string;
  example: React.ReactNode;
}

const Section: React.FC<ISection> = (props: ISection) => {
  const {
    title,
    content: { subtitle, items }
  } = props;
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {subtitle && <h3>{subtitle}</h3>}
        <ul>
          {items.length > 0 &&
            items.map((item: any, index: number) => {
              return item.example ? (
                <li key={`${item}-${index}`}>
                  {item.description}:
                  <div>
                    {item.example}
                  </div>
                </li>
              ) : (
                <li key={`${item}-${index}`}>{item}</li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Section;
