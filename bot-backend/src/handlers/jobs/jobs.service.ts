import { Command, Ctx, Update } from 'nestjs-telegraf';
import { Context, Markup } from 'telegraf';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { jobsInfo } from '../../utils/jobs';
import { JobInfo } from '../../utils/jobs/types';

@Update()
export class JobsService {
  constructor(private i18n: I18nService<I18nTranslations>) {}

  @Command('jobs')
  async start(@Ctx() ctx: Context) {
    const keyboardLines = jobsInfo.map((job: JobInfo) =>
      Markup.button.webApp(
        job.title,
        'https://webapp.pauxis.dev/react-mini-app/index.html?jobId=' + job.id,
      ),
    );

    const keyboard = Markup.keyboard(keyboardLines, {
      columns: 1,
    }).reply_markup;

    const text = this.i18n.t('strings.jobs.text');
    await ctx.reply(text, { reply_markup: keyboard });
  }
}
