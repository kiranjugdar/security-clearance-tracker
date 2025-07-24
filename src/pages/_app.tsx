import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useEffect } from 'react';
import { fetchHistory, fetchTimeline } from '../api/clearance';
import { setHistory, setTimeline } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Client‑side fetch on mount
    fetchHistory().then(data => store.dispatch(setHistory(data)));
    fetchTimeline().then(data => store.dispatch(setTimeline(data)));
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;