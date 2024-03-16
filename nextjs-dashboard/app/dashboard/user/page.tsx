import { lusitana } from '@/app/ui/fonts';
import { fetchUserInfo } from '@/app/lib/data';
import UserDetails from '@/app/ui/dashboard/user-details';
 
export default async function Page() {
    const userinfo = await fetchUserInfo();
  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <UserDetails userdetails={userinfo}  />

      </div>
    </main>
  );
}

