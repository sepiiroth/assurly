# Assurly — Simulateur de devis pour assurance professionnelle

Assurly est un projet démonstratif développé en 2h pour préparer un entretien.  
Il illustre ma capacité à m'adapter rapidement à une stack moderne et à produire un code fiable, typé, testé et maintenable.

---

## 🚀 Démo rapide

> **Simulateur de devis** pour les professionnels :  
> Entrez un métier et un chiffre d’affaires → obtenez un tarif estimé.  
> Possibilité de **soumettre une demande de souscription** (mockée).

---

## 🧰 Stack technique

- **Frontend :**

  - [React 19](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Emotion](https://emotion.sh/) (CSS-in-JS)
  - [TanStack React Query](https://tanstack.com/query)

- **Backend :**

  - [tRPC](https://trpc.io/) — API typée end-to-end
  - [Zod](https://zod.dev/) — Validation des entrées

- **Tests :**

  - [Vitest](https://vitest.dev/) — tests unitaires
  - [Playwright](https://playwright.dev/) — tests end-to-end
  - [wait-on](https://www.npmjs.com/package/wait-on) — pour attendre que le serveur démarre

- **CI/CD :**
  - [GitHub Actions](https://github.com/features/actions)

---

## ✅ Fonctionnalités

- 🎯 Simulation de devis en fonction du métier et du chiffre d’affaires
- 🧠 Validation des données côté frontend **et** backend
- ✍️ Formulaire stylisé avec Emotion et composants personnalisés
- 🧪 Tests unitaires de la logique métier (ex. `calcTarif`)
- 🤖 Test end-to-end complet du parcours utilisateur
- ⚙️ CI GitHub Actions avec lint + tests unitaires + e2e
- ♻️ Code structuré, logique métier isolée, composants réutilisables

---

## 📸 Captures d’écran

_(Tu peux insérer ici des screenshots avec un badge CI si tu veux)_

---

## 🧪 Lancer le projet en local

### 🔧 Prérequis

- Node.js ≥ 20
- npm ≥ 9

### 🛠️ Installation

```bash
git clone https://github.com/<ton-username>/assurly.git
cd assurly
npm install
```
