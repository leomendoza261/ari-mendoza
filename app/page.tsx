import { SignIn } from '@clerk/nextjs';

export default async function Page() {
  return (
    <main className="flex items-center min-h-screen flex-col bg-blue-500 p-6">
      <h1 className='text-4xl text-white'>ODONOTO FREE</h1>
      <SignIn redirectUrl="/dashboard" />
    </main>
  );
}
