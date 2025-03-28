"use client";

import Image from "next/image";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { user } from "@/data/user";
import { Button } from "../ui/button";

export const TweetPost = () => {
  const handleImageUpload = () => {};
  const handlePostClick = () => {};

  return (
    <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
      <div>
        <Image
          src={user.avatar}
          alt={user.name}
          className="size-12 rounded-full"
          width={48}
          height={48}
        />
      </div>
      <div className="flex-1">
        <span
          className="inline-flex min-h-14 outline-none text-lg text-white cursor-text break-all w-full empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable="plaintext-only"
          role="textbox"
          data-placeholder="O que está acontecendo?"
        />
        <div className="flex justify-between items-center mt-2">
          <div onClick={handleImageUpload} className="cursor-pointer">
            <FontAwesomeIcon icon={faImage} className="size-6" />
          </div>
          <div className="w-28">
            <Button label="Postar" size="medium" onClick={handlePostClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
