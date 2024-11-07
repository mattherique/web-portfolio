import React from "react";
import Navbar from "@/ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}