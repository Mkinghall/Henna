import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NewClientComponent } from './app/new-client/new-client.component';
import { MeetingsComponent } from './app/meetings/meetings.component';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
