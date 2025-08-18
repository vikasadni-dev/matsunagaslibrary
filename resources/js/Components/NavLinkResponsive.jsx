export default function NavLinkResponsive ({active = false, url = '#', title, icon: Icon, ...props})
{
    return(
        <link
        {...props}
        href={url}
        className={cn(
            active
            ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500 font-semibold text-white hover:text-white'
            : 'text-muted-foreground hover:text-orange-500',
            'flex items-center gap-3 rounded-lg p-2 font-medium transition-all'
        )}
        >
            <Icon className='w-4 h-4'/>
            {title}
        </link>
    )
}
