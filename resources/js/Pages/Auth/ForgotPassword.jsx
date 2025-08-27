import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import { Alert, AlertDescription } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
                {/* Bagian kiri */}
                <div className="flex flex-col px-6 py-4">
                    <ApplicationLogo size="size-12" />
                    <div className="mx-auto mt-10 flex w-full flex-col gap-6 lg:w-1/2">
                        <div className="grid gap-2 text-center">
                            {status && (
                                <Alert variant="success">
                                    <AlertDescription>{status}</AlertDescription>
                                </Alert>
                            )}
                            <h1 className="text-3xl font-bold">Lupa Password</h1>
                            <p className="text-balance text-muted-foreground">
                                Lupa kata sandi? Tidak masalah. Cukup beri tahu kami alamat email Anda dan kami akan
                                mengirimkan tautan reset kata sandi yang memungkinkan Anda untuk memilih yang baru.
                            </p>
                        </div>

                        <form onSubmit={onHandleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="example@matsunaga.com"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    {errors.email && <InputError message={errors.email} />}
                                </div>
                                <Button
                                type="submit"
                                variant="orange"
                                size="xl"
                                className="w-full"
                                disable={processing}>
                                    Email Password Reset Link
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bagian kanan (gambar) */}
                <div className="hidden bg-muted lg:block">
                    <img
                        src="/images/login.webp"
                        alt="Login"
                        className="h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
                    />
                </div>
            </div>
        </>
    );
}

ForgotPassword.layout = (page) => <GuestLayout children={page} title="Lupa Password" />;
