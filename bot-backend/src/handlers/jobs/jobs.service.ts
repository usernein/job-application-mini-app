import {Command, Ctx, Update} from 'nestjs-telegraf';
import {Context, Markup} from 'telegraf';
import {I18nService} from 'nestjs-i18n';
import {I18nTranslations} from '../../generated/i18n.generated';
import {jobsInfo} from '../../utils/jobs';
import {JobInfo} from '../../utils/jobs/types';
import {ConfigService} from "@nestjs/config";

@Update()
export class JobsService {
    constructor(private i18n: I18nService<I18nTranslations>, private config: ConfigService) {
    }

    @Command('jobs')
    async start(@Ctx() ctx: Context) {
        const composeWebAppUrl = (jobId: JobInfo['id']) => {
            const baseUrl = this.config.get('webAppUrl');
            const url = new URL(baseUrl);
            url.searchParams.set('jobId', jobId);
            return url.toString();
        }
        
        const keyboardLines = jobsInfo.map((job: JobInfo) =>
            Markup.button.webApp(
                job.title,
                composeWebAppUrl(job.id),
            ),
        );

        const keyboard = Markup.keyboard(keyboardLines, {
            columns: 1,
        }).reply_markup;

        const text = this.i18n.t('strings.jobs.text');
        await ctx.reply(text, {reply_markup: keyboard});
    }
}
