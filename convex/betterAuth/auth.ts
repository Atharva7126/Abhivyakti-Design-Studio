import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";

import { createClient } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";

import { components } from "../_generated/api";
import authConfig from "../auth.config";
import schema from "./schema";

import type { BetterAuthOptions } from "better-auth";
import type { GenericCtx } from "@convex-dev/better-auth/utils";
import type { DataModel } from "../_generated/dataModel";

// Better Auth Component
export const authComponent = createClient<DataModel, typeof schema>(
  components.betterAuth,
  {
    local: { schema },
    verbose: false,
  },
);

// Better Auth Options
export const createAuthOptions = (ctx: GenericCtx<DataModel>) => {
  return {
    appName: "My App",
    baseURL: process.env.SITE_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
    },
    plugins: [convex({ authConfig }), admin()],
  } satisfies BetterAuthOptions;
};

// For `auth` CLI
export const options = createAuthOptions({} as GenericCtx<DataModel>);

// Better Auth Instance
export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth(createAuthOptions(ctx));
};
