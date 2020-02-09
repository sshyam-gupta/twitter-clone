import React from 'react';
import { HashTag } from '../../screens/UserPage/Tweet/style';

const RULE = /((?:#|@)\w+|http\S+)/

export const parse = (value: string, onClick: (data: any, e: any) => void) => {
  return value.split(RULE).map(chunk => {
    return chunk.match(RULE) ? (
      <HashTag key={chunk} onClick={(e) => onClick(chunk, e)}>{chunk}</HashTag>
    ) : (
      chunk
    );
  });
};