import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
    return <div>Ini dashboard</div>;
}

{
    /*persistent layout*/
}
Dashboard.layout = (page) => <AppLayout children={page} title="Dashboard" />;
