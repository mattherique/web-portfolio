import React from "react";
import Navbar from "@/ui/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matheus | About",
  description: "About Matheus Azevedo",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            <header>
                <Navbar/>
            </header>
            <main className='xl:mx-auto w-full max-w-6xl h-full flex flex-col gap-y-20'>
                {children}
            </main>
        </div>
    )
}