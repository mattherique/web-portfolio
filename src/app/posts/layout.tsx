import React from "react";
import Navbar from "@/ui/Navbar";
import { Metadata } from "next";

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