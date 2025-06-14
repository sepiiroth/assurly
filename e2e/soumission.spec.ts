// e2e/devis.spec.ts
import { test, expect } from "@playwright/test";

test("la soumission fonctionne", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.fill('input[placeholder="Métier"]', "boulanger");
  await page.fill('input[placeholder="Chiffre d\'affaires"]', "80000");

  await page.click("text=Envoyer ma demande");

  // Vérifie que le tarif s'affiche
  await expect(page.getByText("Demande envoyée !")).toBeVisible();
});
