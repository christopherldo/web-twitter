"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faHeart as faHeartFilled,
} from "@fortawesome/free-solid-svg-icons";

import { Tweet } from "@/models/Tweet";

import { formatRelativeTime } from "@/utils/format-relative";

interface TweetItemProps {
  tweet: Tweet;
  hideComments?: boolean;
}

export const TweetItem = ({ tweet, hideComments }: TweetItemProps) => {
  const [liked, setLiked] = useState(tweet.liked);
  const [formattedTime, setFormattedTime] = useState("");

  const handleLikeButton = () => {
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    setFormattedTime(formatRelativeTime(tweet.dataPost));
  }, []);

  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug.toLowerCase()}`}>
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
          <div className="text-xs text-gray-500">
            @{tweet.user.slug} - {formattedTime}
          </div>
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
        <div className="flex mt-6 text-gray-500">
          {!hideComments && (
            <div className="flex-1">
              <Link href={`/tweet/${tweet.id}`}>
                <div className="inline-flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faComment} className="size-6" />
                  <div className="text-lg">{tweet.commentCount}</div>
                </div>
              </Link>
            </div>
          )}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faRetweet} className="size-6" />
              <div className="text-lg">{tweet.retweetCount}</div>
            </div>
          </div>
          <div className="flex-1">
            <div
              onClick={handleLikeButton}
              className={`inline-flex items-center gap-2 cursor-pointer ${
                liked && "text-red-400"
              }`}
            >
              <FontAwesomeIcon
                icon={liked ? faHeartFilled : faHeart}
                className="size-6"
              />
              <div className="text-lg">{tweet.likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
