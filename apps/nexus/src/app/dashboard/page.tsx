'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SignedOut>
        <div>Please sign in to access your dashboard.</div>
      </SignedOut>
      
      <SignedIn>
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>
              Welcome back, {user.firstName || 'there'}! 👋
            </h1>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>
              Your personalized dashboard is ready for widgets
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>

        <main>
          <div style={{
            background: '#f8f9fa',
            border: '2px dashed #dee2e6',
            borderRadius: '12px',
            padding: '4rem 2rem',
            textAlign: 'center' as const,
            color: '#6c757d'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
            <h2 style={{ margin: '0 0 1rem 0', color: '#495057' }}>
              Your Dashboard Awaits
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              This is where your connected app widgets will appear.
              <br />
              Ready to add your first integration?
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap' as const,
              marginTop: '2rem'
            }}>
              <div style={{
                padding: '1rem',
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📋</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Linear</div>
                <div style={{ fontSize: '0.8rem' }}>Coming Soon</div>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💬</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Slack</div>
                <div style={{ fontSize: '0.8rem' }}>Coming Soon</div>
              </div>
              
              <div style={{
                padding: '1rem',
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🐙</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>GitHub</div>
                <div style={{ fontSize: '0.8rem' }}>Coming Soon</div>
              </div>
            </div>
          </div>
        </main>
      </SignedIn>
    </div>
  );
}