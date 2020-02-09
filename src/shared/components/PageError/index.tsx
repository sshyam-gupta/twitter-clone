import React from 'react';

import { ErrorPage, ErrorPageInner, ErrorBox, Title } from './styles';
import { Link } from 'react-router-dom';

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <ErrorBox>
        <Title>Sorry, that page doesn’t exist!</Title>
        <p>
          {'Why not try a '}
          <Link to="/user/timesofindia">Times of India</Link>
          {'  to find something else?'}
        </p>
      </ErrorBox>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError;