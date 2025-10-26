const defaultDate = "Today";

async function promptAndParseNaturalLanguageDate(params) {
  let prompt = defaultDate;
  if (params.quickAddApi) {
    // if calling via a QuickAdd macro
    prompt = await params.quickAddApi.inputPrompt(
      "Date",
      defaultDate,
      defaultDate,
    );
  } else if (params.system) {
    // if calling from a template (requires passing `tp` as params)
    prompt = await params.system.prompt("Date", defaultDate);
  }

  const { parser, settings } = app.plugins.plugins["nldates-obsidian"];

  const parsed = parser.getParsedDate(prompt);
  const dateString = moment(parsed).format(settings.format);
  return `${dateString}`;
}

module.exports = promptAndParseNaturalLanguageDate;
