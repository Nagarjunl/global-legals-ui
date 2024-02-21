import { BuildingOfficeIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'
import PaymentReport from '../pages/SuperUser/PaymentReport';
import DetailCard from '../pages/SuperUser/DetailCard';
import Plans from '../pages/Profile/plans';
import ProfessionalDetails from '../pages/SuperUser/ProfessionalDetails';

export const LAWYERS = "Lawyers";
export const BAIL_BONDSMAN = "Bail Bondsman";
export const PRIVATE_INVESTIGATORS = "Private Investigators"
export const SECURITY = "Security"

export const professionals = [
    { value: LAWYERS, label: LAWYERS },
    { value: BAIL_BONDSMAN, label: BAIL_BONDSMAN },
    { value: SECURITY, label: SECURITY },
    { value: PRIVATE_INVESTIGATORS, label: PRIVATE_INVESTIGATORS },
];

export const superUserTabs = [
    { index: 0, value: 'Details', label: 'Details', href: '#', icon: UserIcon, current: true, content: <ProfessionalDetails hideButtons={true} /> },
    { index: 1, value: 'Payment Report', label: 'Payment Report', href: '#', icon: BuildingOfficeIcon, current: false, content: <PaymentReport /> },
    { index: 2, value: 'Analytics', label: 'Analytics', href: '#', icon: UsersIcon, current: false, content: <DetailCard /> },
]

export const paidStatus = [
    { value: 'paid', label: 'Paid Months' },
    { value: 'unpaid', label: 'Unpaid Months' },
];

export const professionalsTabs = [
    { index: 0, value: 'Analytics', label: 'Analytics', href: '#', icon: UsersIcon, current: false, content: <DetailCard /> },
    { index: 1, value: 'Payment Report', label: 'Payment Report', href: '#', icon: BuildingOfficeIcon, current: false, content: <PaymentReport /> },
    { index: 2, value: 'Your Plan', label: 'Your Plan', href: '#', icon: UsersIcon, current: false, content: <Plans /> },
]