// Libs
import React from "react";

// UI Components
import Navbar from "@/ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className="w-full h-[600px] image-background">
                {children}
            </main>
        </div>
    )
}