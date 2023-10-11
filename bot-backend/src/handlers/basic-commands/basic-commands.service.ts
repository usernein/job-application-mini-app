import { Ctx, Help, Start, Update } from 'nestjs-telegraf';
import { Context, Markup } from 'telegraf';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';

@Update()
export class BasicCommandsService {
  constructor(private i18n: I18nService<I18nTranslations>) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    const text = this.i18n.translate('strings.start.text', {
      lang: ctx.from.language_code,
    });
    const removeKeyboard = Markup.removeKeyboard().reply_markup;
    await ctx.reply(text, { reply_markup: removeKeyboard });
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    const text = this.i18n.translate('strings.help.text', {
      lang: ctx.from.language_code,
    });
    const removeKeyboard = Markup.removeKeyboard().reply_markup;
    await ctx.reply(text, { reply_markup: removeKeyboard });
  }
}
