import React from 'react';
import { Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';

export default () => {
  return (
    <div>
      <Route path="/" component={HelloWorld} />
      <Route path="/hello" component={() => 'hello this is testing routing'} />
    </div>
  );
}
