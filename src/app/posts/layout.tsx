// Libs
import React from "react";
import { Metadata } from "next";

// Ui
import Navbar from "@/ui/Navbar";

export const metadata: Metadata = {
  title: "Matheus | Posts",
  description: "Blog posts from Matheus Azevedo",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}