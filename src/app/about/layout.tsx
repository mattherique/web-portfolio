// Libs
import React from "react";
import { Metadata } from "next";

// UI Components
import Navbar from "@/ui/Navbar";

export const metadata: Metadata = {
  title: "Matheus | About",
  description: "About Matheus Azevedo",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full image-background h-full" data-cover={true}>
            <header>
                <Navbar/>
            </header>
            <main className='w-full'>
                {children}
            </main>
        </div>
    )
}