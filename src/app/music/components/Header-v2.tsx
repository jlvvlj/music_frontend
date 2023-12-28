export const Header = () => (
  <nav
    className="w-full border-b bg-white"
    id="page-header"
  // transition:persist="header"
  >
    <div
      className="w-full container mx-auto max-w-screen-lg px-6 lg:px-0 flex flex-wrap items-center mt-0 py-6"
    >
      <div>
        <a
          className="flex items-center tracking-tight no-underline hover:no-underline font-bold text-black text-xl"
          href="/"
        >
          Music Library
        </a>
      </div>
    </div>
  </nav>
)