import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const devisRouter = createTRPCRouter({
  simuler: publicProcedure
    .input(
      z.object({
        metier: z.string(),
        ca: z.number(),
      }),
    )
    .query(({ input }) => {
      const { metier, ca } = input;

      // Simulation simple (mock)
      const tarifBase = 20;
      const coef = ca > 100000 ? 1.5 : 1.1;
      const tarifFinal = tarifBase * coef;

      return {
        metier,
        ca,
        tarif: tarifFinal,
      };
    }),
});
