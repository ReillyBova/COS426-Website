import React from 'react';
import { Redirect } from '@reach/router';
import { withPrefix } from "gatsby";

const NotFoundPage = () => <Redirect to={withPrefix("/")} noThrow/>;

export default NotFoundPage;
