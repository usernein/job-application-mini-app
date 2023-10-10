import { On, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class WebappFormDataService {
  @On('web_app_data')
  async web_app_data(ctx: Context) {
    const text = `You sent: ${JSON.stringify(ctx.webAppData)}`;
    await ctx.reply(text);
  }
}
