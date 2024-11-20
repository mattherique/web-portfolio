import React from "react";
import Navbar from "@/ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='mx-12 xl:mx-auto max-w-6xl h-full flex flex-col gap-y-20'>
                {children}
            </main>
        </div>
    )
}