import Image from "next/image"
// import background from  "./background.jpg"
export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-8 ">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        <div className="small w-100 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 border-end">
                <div className="d-flex">

                  <div className="col-md-9 flex-fill">
                    {/* <h3 className="h5 my-2">Delivery Service</h3> */}
                    <p className="text-lg">Благодаря собственному производству,
                      <b> мы контролируем и поддерживаем качество
                      на каждом этапе изготовления продукции.</b></p>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-lg-6 border-end">
                <div className="d-flex">

                  <div className="col-md-9 flex-fill">
                    {/* <h3 className="h5 my-2">Independently Checked</h3> */}
                    <p className="text-lg"><b>Ассортимент нашей продукции включает в себя весь спектр изделий, которые необходимы для организации паркового или дворового пространства:</b>
                      скамейки, урны, вазоны, столы, мангалы и поленницы, уличные трибуны, качели, декоративные панно, указатели, стенды, парковки для велосипедов, оборудование для Workout, оборудование для выгула собак и многое другое.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3" >
                <div className="d-flex">

                  <div className="col-md-9 flex-fill">
                    {/* <h3 className="h5 my-2">Online Support</h3> */}
                    <p className="text-lg">Наличие собственных производственных мощностей
                      позволяет предложить Вам
                      <b> производство по индивидуальным проектам!</b></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex border-top justify-content-center " >
          <div className="w-screen backdrop-blur-sm bg-black/30 absolute z-10 h-48">

          </div>
          <Image
            className="w-screen absolute z-0 h-48 object-cover"
            src="/background.jpg"
            alt="Bench background"
            width={180}
            height={38}
            priority
          />
          <div className="flex flex-column z-10 justify-content-center gap-4 py-2 my-3.5" >
            <div className="flex flex-column z-10 justify-content-center z-10 text-center">
              <h3 className="fs-2 fw-light z-10 text-white">Stay in touch with our <span className="fw-bold">
                monthly and free</span> newsletter!
              </h3></div>
            <div className="flex flex-column z-10 justify-content-center text-center">
              <div className="row">
                <div className="grouped-inputs border bg-light p-2">
                  <div className="row">
                    <div className="col">
                      <form className="form-floating">
                        <input type="email" className="form-control p-3" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                      </form>
                    </div>
                    <div className="z-10 col-auto">
                      <a href="#" className="btn btn-dark py-3 px-5 z-10">Subscribe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
