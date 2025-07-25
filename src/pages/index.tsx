import Head from 'next/head';
import { HeaderBar } from '../components/HeaderBar';
import { CaseSelector } from '../components/CaseSelector';
import { ClearanceProgressBar } from '../components/ClearanceProgressBar';
import { CurrentStatus } from '../components/CurrentStatus';
import { StatusHistory } from '../components/StatusHistory';
import { CaseHistory } from '../components/CaseHistory';

export default function Home() {
  return (
    <>
      <Head>
        <title>Security Clearance Tracker</title>
        <meta name="description" content="Static client‑rendered clearance tracker" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <HeaderBar />
        <main className="p-6 max-w-6xl mx-auto">
          <CaseSelector />
          <ClearanceProgressBar />
          <CurrentStatus />
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <StatusHistory />
            </div>
            <div className="col-lg-6 d-flex">
              <CaseHistory />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}