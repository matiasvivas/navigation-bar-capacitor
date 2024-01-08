import { registerPlugin } from '@capacitor/core';
import type { navigationBarPlugin } from './definitions';

const navigationBar = registerPlugin<navigationBarPlugin>('navigationBar', {
  web: () => import('./web').then(m => new m.navigationBarWeb()),
});

export * from './definitions';
export { navigationBar };
