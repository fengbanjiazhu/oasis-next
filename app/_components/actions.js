"use server";

import { signIn } from "../_lib/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
