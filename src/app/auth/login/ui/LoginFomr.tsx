'use client'

import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link"
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

export const LoginForm = () => {

  const [state, dispatch] = useFormState(
    authenticate,
    undefined,
  );

  console.log({ state });
  console.log('Login form', { state });

  return (
    <form action={dispatch} className="flex flex-col">

      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />


      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password" />
      {
        state === "CredentialsSignin" && (
          <div className="mb-5 flex flex-row">

            <RiErrorWarningLine className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales invalidas
            </p>
          </div>
        )
      }
      {/* <button
        type="submit"
        className="btn-primary">
        Ingresar
      </button> */}

      <LoginButton />


      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-600">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>


      <Link
        href="/auth/new-account"
        className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>

    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus();

  return(
    <button
        type="submit"
        className={
          clsx(
            {"btn-primary": !pending,
            "btn-disabled": pending}
          )
        }
        disabled={pending}
        >
        Ingresar
      </button>
  )
}