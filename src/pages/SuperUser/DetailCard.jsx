import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline';
import ChartThree from './ChartThree.tsx';
import ChartTwo from './ChartTwo.tsx';

const stats = [
    { id: 1, name: 'Total Views In Day', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Total Views In Week', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Total Views In Month', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
    { id: 4, name: 'Total Views In Year', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
    { id: 5, name: 'Search Based Views', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DetailCard() {
    return (
        <div>


            <div className="grid grid-cols-10 gap-4 md:gap-6 2xl:gap-7.5">
                <ChartThree />
                <ChartTwo />
            </div>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:pt-6"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-indigo-500 p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                            <p
                                className={classNames(
                                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                                ) : (
                                    <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                                )}

                                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                {item.change}
                            </p>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
