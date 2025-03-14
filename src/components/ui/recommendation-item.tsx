"use client";

import { User } from "@/models/User";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

interface RecommendationItemProps {
  user: User;
}

export const RecommendationItem = ({ user }: RecommendationItemProps) => {
  const [following, setFollowing] = useState(false);

  const handleFollowButton = () => {
    setFollowing(true);
  };

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
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
        <div className="truncate text-sm text-gray-400">@{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleFollowButton} size="small" />
        )}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-gray-600 w-3/4 h-4"></div>
        <div className="bg-gray-600 w-1/4 h-4"></div>
      </div>
    </div>
  );
};
