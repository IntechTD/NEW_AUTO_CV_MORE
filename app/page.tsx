'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Benvenuto nel Portale Analisi CV</h1>
      <p className="text-lg text-gray-600 mb-8">Effettua l’accesso per avviare l’analisi intelligente del curriculum</p>
      <Button className="px-6 py-2 text-lg">Analizza il tuo CV</Button>
    </div>
  );
}