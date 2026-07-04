import { PillNav } from './PillNav';
import { navItems, site } from '@/lib/config';

/** SLNav — site-wide primary nav; ported from sevenloop/sl-shared.jsx. */
export function Nav() {
  return <PillNav brand={site.brand} items={navItems} />;
}
