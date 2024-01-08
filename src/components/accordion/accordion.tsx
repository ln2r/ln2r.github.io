"use client";
import React, { useState } from "react";
import { AccordionItem } from "./accordion.item";
import './accordion.scss';

export const Accordion = ({data}: any) => {
  const max = 9999;
  const [indexopen, setIndexOpen] = useState<number>(10);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? max : index);
  }

  return (
    <section className='accordion'>
      {data.map((item:any, index: number) => (
        <AccordionItem
          key={index}
          open={index === indexopen}
          title={item.title}
          subtitle={item.date}
          onClick={() => handleClick(index)}
        >
          <p><strong>Project Type</strong>: {item.type}</p>
          <p><strong>Tags</strong>: {item.tags.join(', ')}</p>
          <p><strong>Desciption</strong>: {item.description}</p>
          {
            item.url.length > 0 ? <div className="url">
              <p><strong>Url(s)</strong>:</p>
              <ul>
                {
                  item?.url?.map((u: any, index: number) => <li key={index}><a href={u.link}>{u.text}</a></li>)
                }
              </ul>
            </div> : ''
          }
        </AccordionItem>
      ))}
    </section>
  );
};