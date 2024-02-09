import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const Text = ({ children }) => <span className="inline">{children}</span>;
const List = ({ children }) => <ol className='list-decimal mt-4 mb-4'>{children}</ol>;
const ListUL = ({ children }) => <ul className='list-disc mt-4 mb-4'>{children}</ul>;

export const contentOptions = {
  renderText: (text) => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.OL_LIST]: (node, children) => <List>{children}</List>,
    [BLOCKS.UL_LIST]: (node, children) => <ListUL>{children}</ListUL>,
  },
};
