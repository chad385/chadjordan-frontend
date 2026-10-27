'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { events } from '@/lib/analytics/tracker';

/** Records one page_view per page the visitor actually opens (client-side only, so bots that don't run scripts aren't counted). */
export default function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) events.pageView(pathname);
  }, [pathname]);
  return null;
}
