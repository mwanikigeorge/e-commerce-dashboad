'use client';

import Navbar from "@/components/Navbar";
import { useModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";


export default function Home() {

  const onOpen = useModalStore(state => state.onOpen);
  const isOpen = useModalStore(state => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);
  

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <p>Admin dashboard</p>
    </main>
  )
}
