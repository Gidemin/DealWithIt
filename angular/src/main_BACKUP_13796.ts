import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
};

document.addEventListener('deviceready', onDeviceReady, false);
<<<<<<< HEAD

=======
>>>>>>> 1fa20f5... Angular adopted for start on smartphone
