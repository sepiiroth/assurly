"use client";

import { api } from "@/trpc/react";
import { useState } from "react";

export default function Home() {
  const [metier, setMetier] = useState("boulanger");
  const [ca, setCA] = useState(50000);

  const { data, refetch, isFetching } = api.devis.simuler.useQuery(
    { metier, ca },
    { enabled: false },
  );

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simulateur de devis</h1>

      <input
        value={metier}
        onChange={(e) => setMetier(e.target.value)}
        placeholder="Métier"
        className="border p-2 mr-2"
      />
      <input
        type="number"
        value={ca}
        onChange={(e) => setCA(Number(e.target.value))}
        placeholder="Chiffre d'affaires"
        className="border p-2 mr-2"
      />

      <button
        onClick={() => refetch()}
        className="bg-black text-white p-2 mt-2"
      >
        Simuler
      </button>

      {isFetching && <p>Calcul en cours...</p>}

      {data && (
        <div className="mt-4">
          <p>Métier : {data.metier}</p>
          <p>Chiffre d&apos;affaires : {data.ca} €</p>
          <p className="font-bold">Tarif estimé : {data.tarif} €</p>
        </div>
      )}
    </main>
  );
}
