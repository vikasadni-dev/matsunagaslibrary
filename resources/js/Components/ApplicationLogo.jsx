import { cn } from '@/lib/utils'; // ⬅ tambahkan ini
import { IconInnerShadowBottomRight } from '@tabler/icons-react';

export default function ApplicationLogo({ url = '#', size = 'size-9', isTitle = true }) {
    return (
        <a href={url} className="flex items-center gap-2">
            {' '}
            {/* ⬅ ganti <link> menjadi <a> */}
            <IconInnerShadowBottomRight className={cn('text-orange-500', size)} />
            {isTitle && (
                <div className="flex flex-col">
                    <span className="font-bold leading-none text-foreground">Matsunaga's Library</span>
                    <span className="text-xs font-medium text-muted-foreground">Pengetahuan Tanpa Batas</span>
                </div>
            )}
        </a>
    );
}
