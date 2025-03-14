import Image from "next/image";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { user } from "@/data/user";

import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const isMe = true;

  return (
    <div>
      <GeneralHeader backHref={`/${user.slug.toLowerCase()}`}>
        <div className="font-bold text-lg">Editar perfil</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url('${user.cover}')` }}
        >
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>
        <div className="-mt-12 px-6">
          <Image
            src={user.avatar}
            alt={user.name}
            width={96}
            height={96}
            className="size-24 rounded-full"
          />
          <div className="-mt-24 size-24 flex justify-center items-center">
            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4">
        <label htmlFor="name">
          <p className="text-lg text-gray-500">Nome</p>
          <Input
            id="name"
            name="name"
            placeholder="Digite seu nome"
            type="text"
            value={user.name}
            readOnly
          />
        </label>
        <label htmlFor="bio">
          <p className="text-lg text-gray-500">Bio</p>
        </label>
        <label htmlFor="link">
          <p className="text-lg text-gray-500">Link</p>
          <Input
            id="link"
            name="link"
            placeholder="Digite um link"
            type="text"
            value={user.link}
            readOnly
          />
        </label>

        <Button label="Salvar alterações" size="large" />
      </section>
    </div>
  );
}
