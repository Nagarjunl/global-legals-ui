import { ArrowUpIcon } from '@heroicons/react/20/solid'
import { UsersIcon } from '@heroicons/react/24/outline';
import ChartThree from './ChartThree.tsx';

import {
    useGetProfileDayCountQuery,
    useGetProfileWeekCountQuery,
    useGetProfileMonthCountQuery,
    useGetLastThreeMonthsQuery,
    useGetChartDataQuery,
} from '../../services/profileAPI.js'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addChartData } from '../../reducers/profileSlice.js';

export default function DetailCard() {

    const disaptch = useDispatch();

    const userId = useSelector((state) =>
        state.user.current_user.role === "Founder" ?
            state.profile.profileUser.id : state.user.current_user.id
    );

    const { data: dayData } = useGetProfileDayCountQuery(userId, {
        skip: userId === undefined
    });
    const { data: weekData } = useGetProfileWeekCountQuery(userId, {
        skip: userId === undefined
    });
    const { data: monthData } = useGetProfileMonthCountQuery(userId, {
        skip: userId === undefined
    });
    const { data: lastThreeMonths } = useGetLastThreeMonthsQuery(userId, {
        skip: userId === undefined
    });
    const { data: chartData, isLoading } = useGetChartDataQuery(userId, {
        skip: userId === undefined
    });

    useEffect(() => {
        if (!isLoading)
            disaptch(addChartData(chartData));
    }, [chartData, isLoading, disaptch])

    return (

        <div className='mb-10'>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    className="relative overflow-hidden rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div className="absolute rounded-md bg-indigo-500 p-3">
                            <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-500">Todays View Count</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900"> {dayData?._sum.count} </p>
                        <p
                            className='text-green-600 ml-2 flex items-baseline text-sm font-semibold'
                        >
                            <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                        </p>
                    </dd>
                </div>

                <div
                    className="relative overflow-hidden rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div className="absolute rounded-md bg-indigo-500 p-3">
                            <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-500">This Week View Count</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900"> {weekData?._sum.count} </p>
                        <p
                            className='text-green-600 ml-2 flex items-baseline text-sm font-semibold'
                        >
                            <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                        </p>
                    </dd>
                </div>

                <div
                    className="relative overflow-hidden rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div className="absolute rounded-md bg-indigo-500 p-3">
                            <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-500">This Month View Count</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900"> {monthData?._sum.count} </p>
                        <p
                            className='text-green-600 ml-2 flex items-baseline text-sm font-semibold'
                        >
                            <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                        </p>
                    </dd>
                </div>

                <div
                    className="relative overflow-hidden rounded-lg bg-white px-4 py-4 shadow-md sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div className="absolute rounded-md bg-indigo-500 p-3">
                            <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-500">Last 90 Days View Count</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900"> {lastThreeMonths?._sum.count} </p>
                        <p
                            className='text-green-600 ml-2 flex items-baseline text-sm font-semibold'
                        >
                            <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                        </p>
                    </dd>
                </div>
            </dl>

            {!isLoading &&
                <div className="mt-5 container mx-auto">
                    <ChartThree chartData={chartData} />
                </div>
            }

        </div>
    )
}
