"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleButtonEntrar = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        name="password"
        type="password"
        placeholder="Digite sua senha"
        value={form.password}
        onChange={handleChange}
      />

      <Button label="Entrar" onClick={handleButtonEntrar} size="large"/>
    </>
  );
};
