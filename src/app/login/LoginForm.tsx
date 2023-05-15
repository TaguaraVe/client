import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default function LoginForm() {
  // async function handleSubmit(values: FormData) {
  //   const userName = values.get('userName') as string;
  //   const password = values.get('password') as string;
  //   revalidatePath('/login');
  //   console.log('Nombre', userName, password);
  //   // ...
  // }

  return (
    <article className="w-full max-w-md relative flexC flex-col flex-1 mx-auto">
      <h1 className="title text-center mb-12">BlueBank</h1>
      <form
        // action={handleSubmit}
        className="w-full max-w-sm mx-auto text-center "
      >
        <div className="relative py-0  mx-auto mb-4 flex flex-col w-full">
          <label htmlFor="userNname" className="text-left mr-2">
            Nombre de Usuario
          </label>
          <input
            type="text"
            placeholder="ingrese su nombre de usuario"
            className={`px-2 py-1 rounded-lg border-b-4 outline-0 focus:border-b-6 border-primary-500 focus:border-secondary-500 bg-transparent`}
          />
        </div>
        <div className="relative py-0  mx-auto mb-4 flex flex-col w-full">
          <label htmlFor="userNname" className="text-left mr-2">
            Contraseña
          </label>
          <input
            type="text"
            placeholder="ingrese su contraseña"
            className={`px-2 py-1 rounded-lg border-b-4 outline-0 focus:border-b-6 border-primary-500 focus:border-secondary-500 bg-transparent`}
          />
        </div>

        <Link
          href="/resetpassword"
          className="text-sm text-red-800 hover:underline mb-12 "
        >
          ¿Olvidaste tu contraseña?
        </Link>

        <button
          type="submit"
          className=" w-4/5 bg-secondary-400 disabled:bg-neutral-300 text-white rounded-full py-2 hover:bg-secondary-600 my-12"
        >
          Iniciar sesión
        </button>
      </form>

      <p className="font-medium text-sm text-center">
        ¿aún no tienes una cuenta?{' '}
        <Link href="/register" className="text-secondary-300 font-semibold">
          Crear cuenta
        </Link>
      </p>
      <p className=" absolute bottom-4 font-medium text-sm text-left">
        Sentite seguro con <span className="font-bold">BlueBank</span>. Nunca
        compartas tus datos personales, claves y números de tarjetas con nadie.{' '}
        <Link href="/register" className="underline">
          Te compartimos algunos consejos aquí{' '}
        </Link>
      </p>
    </article>
  );
}
