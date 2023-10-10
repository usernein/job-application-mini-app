import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { join } from 'path';
import { TelegrafModule } from 'nestjs-telegraf';
import { BasicCommandsService } from './handlers/basic-commands/basic-commands.service';
import { JobsService } from './handlers/jobs/jobs.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { I18nModule } from 'nestjs-i18n';
import { WebappFormDataService } from './handlers/webapp-form-data/webapp-form-data.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '/../../', 'miniapp-frontend', 'dist'),
    }),
    ConfigModule.forRoot({ load: [configuration] }),
    TelegrafModule.forRoot({
      token: configuration().token,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      typesOutputPath: path.join(
        __dirname,
        '../src/generated/i18n.generated.ts',
      ),
    }),
  ],
  providers: [
    AppService,
    BasicCommandsService,
    JobsService,
    WebappFormDataService,
  ],
})
export class AppModule {}
