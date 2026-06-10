import AdminAvatar from '@/components/admin/AdminAvatar';
import AdminTopNavigation from '@/components/admin/navigation/AdminTopNavigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminTopNavigation />
      <AdminAvatar />
      <div className="admin-page-offset">{children}</div>
    </>
  );
}
