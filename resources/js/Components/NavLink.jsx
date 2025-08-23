import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

export default function NavLink({ active = false, url = '#', title, icon: Icon, ...props }) {
    return (
        <Link
            {...props}
            href={url}
            className={cn(
                active
                    ? 'via-orange-600 bg-gradient-to-r from-orange-400 to-orange-500 font-semibold text-white hover:text-white'
                    : 'text-muted-foreground hover:text-orange-500',
                'flex items-center gap-3 rounded-lg font-medium transition-all p-3',
            )}
        >
            <Icon className="h-4 w-4" />
            {title}
        </Link>
    );
}

