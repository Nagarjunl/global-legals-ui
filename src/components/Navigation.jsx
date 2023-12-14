import { ChevronRightIcon } from "@heroicons/react/20/solid";

const pages = [
  { name: "Tennessee", href: "#", current: false },
  { name: "Knoxville", href: "#", current: true },
  { name: "Oakes Law firm", href: "#", current: true },
];
const Navigation = () => {
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" className="text-black hover:text-blue-600">
                Home
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={page.href}
                  className="ml-4 text-sm font-medium text-black hover:text-blue-600    "
                  aria-current={page.current ? "page" : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Navigation;
