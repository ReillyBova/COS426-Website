import React from 'react';
import { Redirect } from '@reach/router';
import { withPrefix } from 'gatsby';

const RedirectNoThrow = () => <Redirect to={withPrefix('/')} noThrow />;

export default RedirectNoThrow;
