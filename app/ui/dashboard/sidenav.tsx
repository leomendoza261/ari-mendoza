import NavLinks from '@/app/ui/dashboard/nav-links';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-end justify-end rounded-md bg-blue-600 text-white p-4 md:h-40">
        <SignedOut >
          <SignInButton mode='modal'/>
          {/* <SignUpButton /> */}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>


      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
