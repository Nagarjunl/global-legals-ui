

import { ChevronRightIcon} from '@heroicons/react/20/solid'

const pages = [
  { name: 'Find a Lawyer', href: '#', current: false },
//   { name: 'Project Nero', href: '#', current: true },
]

function Home() {
  return (
    <nav className="flex" aria-label="Breadcrumb ">              {/* <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" /> */}

      <ol role="list" className="flex items-center space-x-4 mt-10">
        <li>
          <div>
            <a href="#" className="text-black-400 ">
              <span>Home</span>
              
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-black-400" aria-hidden="true" />
              <a
                href={page.href}
                className="ml-6 text-md font-medium text-blue-500 "
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
export default Home
