import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLinkResponsive from '@/Components/NavLinkResponsive';
import {
    IconAlertCircle,
    IconBooks,
    IconBuildingCommunity,
    IconCategory,
    IconChartDonut2,
    IconCircleKey,
    IconCreditCard,
    IconCreditCardRefund,
    IconDashboard,
    IconKeyframe,
    IconLayoutKanban,
    IconLogout,
    IconMoneybag,
    IconRoute,
    IconSettingsExclamation,
    IconStack3,
    IconUser,
    IconUsersGroup,
    IconVersions,
} from '@tabler/icons-react';

export default function SidebarResponsive({url, auth}) {
    return (
        <nav className="grid gap-6 text-lg font-medium">
            <ApplicationLogo />
            <nav className="grid items-start text-sm font-semibold lg:px-4">
                <div className="px-3 py-2 text-sm font-semibold text-foreground">Dashboard</div>
                <NavLinkResponsive url={route('dashboard')} active={url.startsWith('/dashboard')} title="Dashboard" icon={IconDashboard} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Statistik</div>
                <NavLinkResponsive url="#" title="Statistik Peminjaman" icon={IconChartDonut2} />
                <NavLinkResponsive url="#" title="Laporan Denda" icon={IconMoneybag} />
                <NavLinkResponsive url="#" title="Laporan Stok Buku" icon={IconStack3} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Master</div>
                <NavLinkResponsive url="#" title="Kategori" icon={IconCategory} />
                <NavLinkResponsive url="#" title="Penerbit" icon={IconBuildingCommunity} />
                <NavLinkResponsive url="#" title="Buku" icon={IconBooks} />
                <NavLinkResponsive url="#" title="Pengguna" icon={IconUsersGroup} />
                <NavLinkResponsive url="#" title="Pengaturan Denda" icon={IconSettingsExclamation} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Peran dan Izin</div>
                <NavLinkResponsive url="#" title="Peran" icon={IconCircleKey} />
                <NavLinkResponsive url="#" title="Izin" icon={IconVersions} />
                <NavLinkResponsive url="#" title="Tetapkan Izin" icon={IconKeyframe} />
                <NavLinkResponsive url="#" title="Tetapkan Peran" icon={IconLayoutKanban} />
                <NavLinkResponsive url="#" title="Akses Rute" icon={IconRoute} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Transaksi</div>
                <NavLinkResponsive url="#" title="Peminjaman" icon={IconCreditCard} />
                <NavLinkResponsive url="#" title="Pengembalian" icon={IconCreditCardRefund} />

                <div className="px-3 py-2 text-sm font-semibold text-foreground">Lainnya</div>
                <NavLinkResponsive url="#" title="Pengumuman" icon={IconAlertCircle} />
                {/*bawaan breezee*/}
                <NavLinkResponsive url="{route('profile.edit')}" title="Profil" icon={IconUser} />
                <NavLinkResponsive url="#" title="Logout" icon={IconLogout} />
            </nav>
        </nav>
    );
}
