import Head from 'next/head';
import { HeaderBar } from '../components/HeaderBar';
import { ClearanceProgressBar } from '../components/ClearanceProgressBar';
import { CurrentStatus } from '../components/CurrentStatus';
import { StatusHistory } from '../components/StatusHistory';
import { EstimatedTimeline } from '../components/EstimatedTimeline';

export default function Home() {
  return (
    <>
      <Head>
        <title>Security Clearance Tracker</title>
        <meta name="description" content="Static client‑rendered clearance tracker" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <HeaderBar />
        <main className="p-6 max-w-4xl mx-auto">
          <ClearanceProgressBar />
          <CurrentStatus />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StatusHistory />
            <EstimatedTimeline />
          </div>
        </main>
      </div>
    </>
  );
}