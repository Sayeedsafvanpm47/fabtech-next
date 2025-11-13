'use client';

import { useRouter } from 'next/navigation';

export default function GoToContact({href,name,color}) {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)} className="bg-gray-600 text-white hover:bg-red-600  hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
{name}
    </button>
  );
}
  