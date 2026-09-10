import { Suspense } from 'react';
import SignUpForm from './SignUpForm';

export const metadata = { title: 'Create account' };

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-5rem)] bg-sand-50" />}>
      <SignUpForm />
    </Suspense>
  );
}
