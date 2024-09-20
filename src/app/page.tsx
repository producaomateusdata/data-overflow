import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png" // Substitua pelo logo do Data Overflow
          alt="Data Overflow logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Bem-vindo ao Data Overflow
        </h1>
        <p className="text-lg text-center sm:text-left">
          O lugar onde você compartilha e encontra soluções para erros de programação.
        </p>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <div className="animate-marquee whitespace-nowrap overflow-hidden">
            <span className="inline-block px-4">Erro: Cannot read property 'x' of undefined</span>
            <span className="inline-block px-4">Erro: Unexpected token in JSON</span>
            <span className="inline-block px-4">Erro: Failed to fetch</span>
            <span className="inline-block px-4">Erro: Module not found</span>
          </div>
          <div className="animate-marquee whitespace-nowrap overflow-hidden">
            <span className="inline-block px-4">Erro: SyntaxError: Unexpected end of input</span>
            <span className="inline-block px-4">Erro: ReferenceError: x is not defined</span>
            <span className="inline-block px-4">Erro: TypeError: Cannot read property 'y' of null</span>
            <span className="inline-block px-4">Erro: NetworkError when attempting to fetch resource</span>
          </div>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/deploy.svg" // Substitua pelo ícone de deploy
              alt="Deploy icon"
              width={20}
              height={20}
            />
            Compartilhar Erro
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler Documentação
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/learn.svg" // Substitua pelo ícone de aprender
            alt="Learn icon"
            width={16}
            height={16}
          />
          Aprender
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/examples.svg" // Substitua pelo ícone de exemplos
            alt="Examples icon"
            width={16}
            height={16}
          />
          Exemplos
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg" // Substitua pelo ícone de globo
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ir para Data Overflow →
        </a>
      </footer>
    </div>
  );
}
