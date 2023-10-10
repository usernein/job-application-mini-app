import { On, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class WebappFormDataService {
  @On('web_app_data')
  async web_app_data(ctx: Context) {
    const webAppData = ctx.webAppData.data.json<object>();
    const text = `You sent:\n${JSON.stringify(webAppData, null, 2)}`;
    await ctx.reply(text);
  }
}
