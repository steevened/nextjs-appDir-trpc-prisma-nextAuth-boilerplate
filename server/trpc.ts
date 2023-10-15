import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { TRPCError, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async ({ next }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return next({
    ctx: {
      session,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuth);
