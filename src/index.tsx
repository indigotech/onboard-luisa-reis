import { ApolloClient, ApolloProvider,createHttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setContext } from '@apollo/client/link/context';
import { offsetLimitPagination } from "@apollo/client/utilities";



const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers={} }) => {
  console.log(headers)
  const token = localStorage.getItem('token');
  console.log(token)
  return {
    headers: {
      ...headers,
      Authorization: token
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(
  )
})
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>

    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
