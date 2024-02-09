'use client';
import { useEffect } from 'react';
import AuthenticationPage from '../pages/authentication';
import { Wallet } from './wallet/page';
import { PublicRoutes } from '@/hocs/PublicRoutes';
import { ProtectedRoute } from '@/hocs/PrivateRoutes';

export default function Home() {
  return (
    <ProtectedRoute>
      <main>
        <div className="flex justify-between items-center">
          {/* <Wallet /> */}
          <AuthenticationPage />
        </div>
      </main>
    </ProtectedRoute>
  )
}
