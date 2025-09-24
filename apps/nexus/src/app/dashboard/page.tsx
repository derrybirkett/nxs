'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className={styles.loading}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <SignedOut>
        <div>Please sign in to access your dashboard.</div>
      </SignedOut>
      
      <SignedIn>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.title}>
                Welcome back, {user.firstName || 'there'}! 👋
              </h1>
              <p className={styles.subtitle}>
                Your personalized dashboard is ready for widgets
              </p>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.widgetArea}>
            <div className={styles.heroIcon}>📊</div>
            <h2 className={styles.heroTitle}>
              Your Dashboard Awaits
            </h2>
            <p className={styles.heroDescription}>
              This is where your connected app widgets will appear.
              <br />
              Ready to add your first integration?
            </p>
            
            <div className={styles.widgetPreview}>
              <div className={styles.widgetCard}>
                <div className={styles.widgetIcon}>📋</div>
                <div className={styles.widgetName}>Linear</div>
                <div className={styles.widgetStatus}>Coming Soon</div>
              </div>
              
              <div className={styles.widgetCard}>
                <div className={styles.widgetIcon}>💬</div>
                <div className={styles.widgetName}>Slack</div>
                <div className={styles.widgetStatus}>Coming Soon</div>
              </div>
              
              <div className={styles.widgetCard}>
                <div className={styles.widgetIcon}>🐙</div>
                <div className={styles.widgetName}>GitHub</div>
                <div className={styles.widgetStatus}>Coming Soon</div>
              </div>
            </div>
          </div>
        </main>
      </SignedIn>
    </div>
  );
}