import { redirect } from "next/navigation";

import { user } from "@/data/user";

export default function Page() {
  redirect(`/${user.slug.toLowerCase()}`);
}
