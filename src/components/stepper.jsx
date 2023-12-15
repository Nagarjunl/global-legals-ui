import { CheckIcon } from "@heroicons/react/24/solid";

const steps = [
  { id: "1", name: "Personal Details", href: "#", status: "current" },
  { id: "2", name: "Payment done", href: "#", status: "upcoming" },
  { id: "3", name: "Verification", href: "#", status: "upcoming" },
];
console.log(steps);
export default function Example() {
  return (
    <nav aria-label="Progress p-5">
      <ol
        role="list"
        className="divide-y px-2  rounded-md   md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.status === "complete" ? (
              <a href={step.href} className="group flex w-full items-start">
                <span className="flex items-center py-3 text-sm font-medium">
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-start rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                    <CheckIcon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 lg:text-xs pr-5	 font-medium text-blue-400">
                    {step.name}
                  </span>
                </span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                className="flex items-center pr-5 px-1 py-4 text-xs font-medium"
                aria-current="step"
              >
                <span className="flex h-10 w-10 flex-shrink-0  items-center justify-center rounded-full border-2   border-indigo-400">
                  <span className="text-blue-400">{step.id}</span>
                </span>
                <span className="ml-4 text-xs pr-5 font-medium text-blue-500">
                  {step.name}
                </span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-8 py-4 text-sm font-medium">
                  <span className="flex h-10  w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-400 group-hover:border-blue-400">
                    <span className="text-blue-500  group-hover:text-blue-300">
                      {step.id}
                    </span>
                  </span>

                  <span className="ml-4 text-xs px-5 font-medium text-blue-500 group-hover:text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute  right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4 mt-7 ml-2 text-gray-500"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
