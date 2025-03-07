"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const SigninForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleButtonEntrar = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Digite sua senha"
        value={form.password}
        onChange={handleChange}
      />

      <button onClick={handleButtonEntrar}>Entrar</button>
    </>
  );
};
