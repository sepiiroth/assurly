/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { api } from "@/trpc/react";

const Container = styled.main`
  max-width: 600px;
  margin: 80px auto;
  padding: 2rem;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-left: 4px solid black;
  background: white;
`;

export default function Home() {
  const [metier, setMetier] = useState("boulanger");
  const [ca, setCA] = useState(50000);

  const { data, refetch, isFetching } = api.devis.simuler.useQuery(
    { metier, ca },
    { enabled: false },
  );

  const handleClick = () => {
    if (!metier.trim()) {
      alert("Veuillez entrer un métier");
      return;
    }

    if (isNaN(ca) || ca <= 0) {
      alert("Veuillez entrer un chiffre d'affaires valide");
      return;
    }

    refetch(); // appel tRPC
  };

  return (
    <Container>
      <Title>Simulateur de Devis Pro</Title>

      <Label>Métier</Label>
      <Input
        type="text"
        value={metier}
        onChange={(e) => setMetier(e.target.value)}
        placeholder="Métier"
      />

      <Label>Chiffre d&apos;affaires (€)</Label>
      <Input
        type="number"
        value={ca}
        onChange={(e) => setCA(Number(e.target.value))}
        placeholder="Chiffre d'affaires"
      />

      <Button onClick={handleClick}>
        {isFetching ? "Calcul en cours..." : "Simuler mon tarif"}
      </Button>

      {data && (
        <Result>
          <p>
            <strong>Métier :</strong> {data.metier}
          </p>
          <p>
            <strong>Chiffre d&apos;affaires :</strong> {data.ca} €
          </p>
          <p>
            <strong>Tarif estimé :</strong> {data.tarif} € / mois
          </p>
        </Result>
      )}
    </Container>
  );
}
