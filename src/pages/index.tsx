import { LanguageSwitcher } from "../components/lang-switcher";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-slate-900 text-white">
      <header className="w-full pt-4">
        <LanguageSwitcher />
      </header>
      <div className="flex flex-col flex-1 overflow-auto">
        <hr className="h-px my-8 bg-white border-0 dark:bg-gray-700" />
        <article className=" px-2">
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl dark:text-white">
           Translation Example
          </h2>
          <p className="mb-7 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
</div>
    </div>
  );
}
