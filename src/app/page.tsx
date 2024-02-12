'use client';
import AuthenticationPage from '../pages/authentication';

export default function Home() {
  return (
      <main>
        <div className="flex justify-between items-center">
          {/* <Wallet /> */}
          <AuthenticationPage />
        </div>
      </main>
  )
}
