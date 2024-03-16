
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { UserDetails } from '@/app/lib/definitions';

export default async function User_Details({
    userdetails,
}: {
    userdetails: UserDetails[];
}) {
    
  return (
    <div className="flex w-full flex-col md:col-span-4">

      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        User Info
      </h2>

      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {userdetails.map((details, i) => {
            return (
              <div
                key={details.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={details.image_url}
                    alt={`${details.name}'s profile picture`}
                    className="mr-4 rounded-none"
                    width={200}
                    height={200}
                  />

                </div>
                <div className="flex items-center">{details.name}</div>
                <div className="flex items-center">{details.employee_id}</div>
                <div className="flex items-center">{details.admin}</div>
                <div className="flex items-center">{details.manager}</div>
                <div className="flex items-center">{details.employee}</div>

                
              </div>

            );

          
          })}
        </div>
      </div>
    </div>
 );
}
