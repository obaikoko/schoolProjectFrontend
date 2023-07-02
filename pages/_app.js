import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'react-toastify/dist/ReactToastify.css';
const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://schproject.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </ApolloProvider>
    </>
  );
}
