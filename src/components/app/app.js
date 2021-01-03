import React from 'react';

import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import {withBookstoreService} from '../hoc';

const App = ({bookstoreService}) => {
  // console.log(bookstoreService.getBooks());
  return (
    <div>
      <h1>Hello, Motherfuckers!!!!</h1>
      <Loader bookstoreService={bookstoreService}/>
      <ErrorIndicator />
    </div>
  );
};

export default withBookstoreService()(App);
