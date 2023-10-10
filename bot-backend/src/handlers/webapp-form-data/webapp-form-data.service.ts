import { On, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';

@Update()
export class WebappFormDataService {
  constructor(private i18n: I18nService<I18nTranslations>) {}

  @On('web_app_data')
  async web_app_data(ctx: Context) {
    const button_text = ctx.webAppData.button_text;
    const webAppData = ctx.webAppData.data.json<object>();
    const text = this.i18n.t('strings.jobs.after-receive', {
      args: {
        name: [webAppData['name'], webAppData['last_name']].join(' '),
        location: webAppData['location'],
        email: webAppData['email'],
        about: webAppData['about'],
        job_name: button_text,
      },
    });
    await ctx.reply(text);
  }
}
