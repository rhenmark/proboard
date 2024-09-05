import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'


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


export const blogContentOptions = {
  renderText: (text: any) => {
    return <><ReactMarkdown children={text} components={{
      code(props) {
        const {children, className, node, ...rest} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          // @ts-ignore
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        )
      }
    }} />
    <br/>
    </>
  }
}