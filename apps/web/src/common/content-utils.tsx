import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const Bold = ({ children }: any) => <span className="font-bold">{children}</span>;

const Text = ({ children }: any) => <span className="inline">{children}</span>;
const List = ({ children }: any) => <ol className='list-decimal mt-4 mb-4'>{children}</ol>;
const ListUL = ({ children }: any) => <ul className='list-disc mt-4 mb-4'>{children}</ul>;

export const contentOptions = {
  renderText: (text: any) => {
    return text.split('\n').reduce((children: any, textSegment: any, index: any) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <List>{children}</List>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ListUL>{children}</ListUL>,
  },
};
