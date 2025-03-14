import Image from "next/image";
import Link from "next/link";

import { user } from "@/data/user";

export const NavMyProfile = () => {
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-y-hidden">
        <Link href={`/${user.slug.toLowerCase()}`}>
          <Image
            src={user.avatar}
            alt={user.name}
            className="size-full"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug.toLowerCase()}`} className="block truncate">
          {user.name}
        </Link>
        <div className="text-sm text-gray-400 truncate">@{user.slug}</div>
      </div>
    </div>
  );
};
