import HeaderTitle from '@/Components/HeaderTitle';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/Components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Pagination, PaginationLink } from '@/Components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { useFilter } from '@/hooks/UseFilter';
import AppLayout from '@/Layouts/AppLayout';
import { flashMessage } from '@/lib/utils';
import { Link, router } from '@inertiajs/react';
import { IconArrowsDownUp, IconCategory, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Index(props) {
    const { categories } = props;
    const { data, meta } = categories;
    const [params, setParams] = useState(props.states);
    const onSortable = (field) => {
        setParams({
            ...params,
            field: field,
            direction: params.direction === 'asc'? 'desc' : 'asc'
        })
    }

    useFilter({
        route: route('admin.categories.index'),
        values: params,
        only: ['categories'],
    });
    return (
        <div className="flex w-full flex-col pb-32">
            <div className="mb-8 flex flex-col items-start justify-between gap-y-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconCategory}
                />
                <Button variant="orange" size="lg" asChild>
                    <Link href={route('admin.categories.create')}>
                        <IconPlus className="size-4" />
                        Tambah
                    </Link>
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <div className='flex w-full flex-col gap-4 lg:flex-row lg:items-center'>
                        <Input
                        className= "w-full sm:w-1/4"
                        placeholder="Search..."
                        value={params?.search}
                        onChange={(e) => setParams((prev) => ({...prev, search: e.target.value}))}
                        />
                        <Select value={params?.load} onValueChange={(e) => setParams({...params, load: e})}>
                            <SelectTrigger className='w-full sm:w-24'>
                                <SelectValue placeholder='Load'/>
                            </SelectTrigger>
                            <SelectContent>
                                {[10, 25, 50, 75, 100].map((number, index)=> (
                                    <SelectItem key={index} value={number}>
                                        {number}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>
                <CardContent className="px-0 py-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        className="inline-flex group"
                                        onClick={() => onSortable('id')}
                                        >
                                            #
                                            <span className='ml-2 flex-none rounded text-muted-foreground'>
                                                <IconArrowsDownUp className='size-4 text-muted-foreground'/>
                                            </span>
                                    </Button>
                                </TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        className="inline-flex group"
                                        onClick={() => onSortable('name')}
                                        >
                                            Nama
                                            <span className='ml-2 flex-none rounded text-muted-foreground'>
                                                <IconArrowsDownUp className='size-4 text-muted-foreground'/>
                                            </span>
                                    </Button>
                                </TableHead>
                                <TableHead>
                                    <Button
                                        variant="ghost"
                                        className="inline-flex group"
                                        onClick={() => onSortable('slug')}
                                        >
                                            Slug
                                            <span className='ml-2 flex-none rounded text-muted-foreground'>
                                                <IconArrowsDownUp className='size-4 text-muted-foreground'/>
                                            </span>
                                    </Button>
                                </TableHead>
                                <TableHead>Cover</TableHead>
                                <TableHead>                                    <Button
                                        variant="ghost"
                                        className="inline-flex group"
                                        onClick={() => onSortable('created_at')}
                                        >
                                            Dibuat pada
                                            <span className='ml-2 flex-none rounded text-muted-foreground'>
                                                <IconArrowsDownUp className='size-4 text-muted-foreground'/>
                                            </span>
                                    </Button>
                                </TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.data?.map((category, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1 + ((meta?.current_page ?? 1) - 1) * (meta?.per_page ?? 10)}</TableCell>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>{category.slug}</TableCell>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={category.cover} />
                                            <AvatarFallback>{category.name.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{category.created_at}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-x-1">
                                            <Button variant="blue" size="sm" asChild>
                                                <Link href={route('admin.categories.edit', category.id)}>
                                                    <IconPencil className="size-4" />
                                                </Link>
                                            </Button>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="red" size="sm">
                                                        <IconTrash className="size-4" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>
                                                            Apakah Anda Benar-Benar Yakin?
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Tindakan Ini Tidak Dapat Dibatalkan. Tindakan Ini Akan
                                                            Menghapus Data Secara Permanen Dan Menghapus Data Anda Dari
                                                            Server.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction
                                                            onClick={() =>
                                                                router.delete(
                                                                    route('admin.categories.destroy', category.id),
                                                                    {
                                                                        preserveScroll: true,
                                                                        preserveState: true,
                                                                        onSuccess: (success) => {
                                                                            const flash = flashMessage(success);
                                                                            if (flash) toast[flash.type](flash.message);
                                                                        },
                                                                    },
                                                                )
                                                            }
                                                        >
                                                            Continue
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex w-full flex-col items-center justify-between border-t py-2 lg:flex-row">
                    <p className="mb-2 text-sm text-muted-foreground">
                        Menampilkan {categories.meta?.from} sampai {categories.meta?.to} dari {categories.meta?.total}{' '}
                        kategori
                    </p>
                    <div className="overflow-x-auto">
                        {categories.meta && categories.meta.links && (
                            <Pagination>
                                {categories.meta.links.map((link, index) => (
                                    <PaginationLink
                                        key={index}
                                        href={link.url ?? '#'}
                                        className="lb:mb-0 mx-1 mb-1"
                                        isActive={link.active}
                                        dangerouslySetInnerHTML={{ __html: link.label }} // biar simbol « » tampil
                                    />
                                ))}
                            </Pagination>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

Index.layout = (page) => <AppLayout children={page} title={page.props.page_settings.title} />;
