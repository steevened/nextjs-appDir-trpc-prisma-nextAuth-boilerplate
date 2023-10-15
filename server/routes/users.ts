import { TRPCError } from "@trpc/server";
import { protectedProcedure, router } from "../trpc";

export const usersRouter = router({
  getUserAuthed: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.session.user) throw new TRPCError({ code: "UNAUTHORIZED" });
    return ctx.session?.user;
  }),
});
