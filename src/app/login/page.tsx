import Link from 'next/link';

import { LoginImage } from './LoginImage';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <section className="gradient">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] minHeight p-12">
        <div className="hidden md:block p-12">
          <LoginImage />
        </div>
        <div className="flex flex-col justify-between h-full">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
