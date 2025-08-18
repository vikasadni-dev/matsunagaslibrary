import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({active = false, url = '#', title, icon: Icon, ...props}){
    return (
        <link
        {...props}
        href={url}
        className={cn(
            active
            ? 'bg-gradient-to-r from-orange-400 via-orang-600 to-orange-500 font-semibold text-white hover:text-white'
            : 'text-muted-foreground hover:text-orange-500',
            'flex items-center gap-3 rounded-lg font-medium transition-all'
        )}
        >
            <Icon className='w-4 h-4'/>
            {title}
        </link>
    )
}
