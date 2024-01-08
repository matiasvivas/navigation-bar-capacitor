import { WebPlugin } from '@capacitor/core';

import type { navigationBarPlugin } from './definitions';

export class navigationBarWeb extends WebPlugin implements navigationBarPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async setNavigationBarColor(options: { color: string }): Promise<void> {
    // Lógica para cambiar el color de la barra de navegación en la plataforma web.
    document.body.style.backgroundColor = options.color;
  }

}
