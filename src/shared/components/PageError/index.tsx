import React from 'react';

import { ErrorPage, ErrorPageInner, ErrorBox, Title } from './styles';

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <ErrorBox>
        <Title>Sorry, that page doesn’t exist!</Title>
        <p>
          {'Why not try a '}
          <a href="/">search</a>
          {'  to find something else?'}
        </p>
      </ErrorBox>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError;