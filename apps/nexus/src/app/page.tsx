'use client';

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <SignedOut>
            <div id="welcome">
              <h1>
                <span>Welcome to </span>
                NXS Dashboard 🎯
              </h1>
              <p>Manage your favorite apps through personalized dashboard widgets</p>
            </div>

            <div id="hero" className="rounded">
              <div className="text-container">
                <h2>
                  🔗 Connect Your Apps
                  <span>Start with Linear, Slack, GitHub and more</span>
                </h2>
                <div className="login-section">
                  <SignInButton mode="modal">
                    <button className="login-button">
                      Get Started →
                    </button>
                  </SignInButton>
                </div>
              </div>
            </div>
          </SignedOut>

          <SignedIn>
            <div id="welcome">
              <h1>Redirecting to your dashboard...</h1>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}