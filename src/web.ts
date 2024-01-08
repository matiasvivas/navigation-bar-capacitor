import { WebPlugin } from '@capacitor/core';

import type { navigationBarPlugin } from './definitions';

export class navigationBarWeb extends WebPlugin implements navigationBarPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
