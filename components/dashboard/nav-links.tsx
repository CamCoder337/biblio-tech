'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    ReceiptRefundIcon,
    DocumentCheckIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Users',
        href: '/dashboard/users',
        icon: UserGroupIcon,
    },
    {
        name: 'Books',
        href: '/dashboard/books',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Reservations',
        href: '/dashboard/reservations',
        icon: DocumentCheckIcon,
    },
    {
        name: 'Loans',
        href: '/dashboard/loans',
        icon: ReceiptRefundIcon,
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={
                            clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-black-50 p-3 text-sm font-medium hover:bg-black hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-black text-white': pathname === link.href,
                                }
                            )
                        }
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
