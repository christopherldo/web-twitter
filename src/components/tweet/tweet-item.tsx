import Image from "next/image";
import Link from "next/link";

import { Tweet } from "@/models/Tweet";

interface TweetItemProps {
  tweet: Tweet;
}

export const TweetItem = ({ tweet }: TweetItemProps) => {
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <Image
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="font-bold text-lg">
            <Link href={`/${tweet.user.slug.toLowerCase()}`}>
              {tweet.user.name}
            </Link>
          </div>
          <div className="text-xs text-gray-500">@{tweet.user.slug}</div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <Image
              src={tweet.image}
              alt="Tweet Image"
              className="w-full rounded-2xl"
              width={450}
              height={225}
            />
          </div>
        )}
        <div className="flex mt-6 text-gray-500">...</div>
      </div>
    </div>
  );
};
