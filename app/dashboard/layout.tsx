import { ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";

import { type Metadata } from 'next'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'

export default function LayoutDashboard({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
            </div>
        </ClerkProvider>

    )
}