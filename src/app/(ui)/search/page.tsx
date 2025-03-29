import { redirect } from "next/navigation";

import { tweet } from "@/data/tweet";

import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";

interface PageProps {
  searchParams: Promise<{
    q: string | undefined;
  }>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  if (!searchParams.q) redirect("/");

  return (
    <div>
      <GeneralHeader backHref="/">
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeader>
      <div className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
      </div>
    </div>
  );
}
