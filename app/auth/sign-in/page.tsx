import { Suspense } from 'react';
import SignInForm from './SignInForm';

export const metadata = { title: 'Sign in' };

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-5rem)] bg-sand-50" />}>
      <SignInForm />
    </Suspense>
  );
}
