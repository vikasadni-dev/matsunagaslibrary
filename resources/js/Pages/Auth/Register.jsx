import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import { Alert, AlertDescription } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        gender: '', // <-- Tambahkan gender di sini
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
            {/* Bagian kiri */}
            <div className="flex flex-col px-6 py-4">
                <ApplicationLogo size="size-12" />
                <div className="mx-auto mt-10 flex w-full flex-col gap-6 lg:w-1/2">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Daftar</h1>
                        <p className="text-balance text-muted-foreground">
                            Buat akun baru anda dengan mengisi form di bawah ini
                        </p>
                    </div>

                    {/* Form register */}
                    <form onSubmit={onHandleSubmit}>
                        <div className="grid gap-4">
                            {/* Nama */}
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    placeholder="Vika Pikachu"
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                />
                                {errors.name && <InputError message={errors.name} />}
                            </div>

                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="vikasadni@gmail.com"
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                />
                                {errors.email && <InputError message={errors.email} />}
                            </div>

                            {/* Gender */}
                            <div className="grid gap-2">
                                <Label htmlFor="gender">Jenis Kelamin</Label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={data.gender}
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                    className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                                >
                                    <option value="">Pilih jenis kelamin</option>
                                    <option value="Perempuan">Perempuan</option>
                                    <option value="Laki-Laki">Laki-Laki</option>
                                </select>
                                {errors.gender && <InputError message={errors.gender} />}
                            </div>

                            {/* Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                />
                                {errors.password && <InputError message={errors.password} />}
                            </div>

                            {/* Konfirmasi Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                />
                                {errors.password_confirmation && (
                                    <InputError message={errors.password_confirmation} />
                                )}
                            </div>

                            {/* Tombol Register */}
                            <Button
                                type="submit"
                                variant="orange"
                                size="xl"
                                className="w-full"
                                disabled={processing}
                            >
                                Daftar
                            </Button>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        Sudah punya akun?{' '}
                        <Link href={route('login')} className="underline">
                            Masuk
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bagian kanan (gambar) */}
            <div className="hidden bg-muted lg:block">
                <img
                    src="/images/login.webp"
                    alt="Register"
                    className="h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
                />
            </div>
        </div>
    );
}

Register.layout = (page) => <GuestLayout children={page} title="register" />;
