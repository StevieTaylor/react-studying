/*
 * @Author: Stevie
 * @Date: 2021-06-29 10:36:54
 * @LastEditTime: 2021-06-29 11:47:04
 * @LastEditors: Stevie
 * @Description:
 */
import * as React from 'react';
import { IContent } from '@/entity/common.entity';
import './style';

type SectionComponent = {
  title: string;
  content: IContent;
};

const Section: React.FC<SectionComponent> = (props: SectionComponent) => {
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
          {items.length > 0 && items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default Section;
