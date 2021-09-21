import AccentTypography from './accent-typography';

const IntroNode = document.querySelector(`.intro`);
const IntroTitle = IntroNode.querySelector(`.intro__title`);
const IntroDate = IntroNode.querySelector(`.intro__date`);

const TitleAccentTypography = new AccentTypography(
    IntroTitle,
    650,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

const DateAccentTypography = new AccentTypography(
    IntroDate,
    350,
    {min: 0, max: 200},
    `active`,
    `transform`,
);

const PrizesTitleNode = document.querySelector(`.prizes`);
const PrizesTitle = PrizesTitleNode.querySelector(`.prizes__title`);

const PrizesTitleAccentTypography = new AccentTypography(
    PrizesTitle,
    600,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

const StoryTitleNode = document.querySelector(`.story`);
const StoryTitle = StoryTitleNode.querySelector(`.story__title`);

const StoryTitleAccentTypography = new AccentTypography(
    StoryTitle,
    400,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

const RulesTitleNode = document.querySelector(`.rules`);
const RulesTitle = RulesTitleNode.querySelector(`.rules__title`);

const RulesTitleAccentTypography = new AccentTypography(
    RulesTitle,
    400,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

const GameTitleNode = document.querySelector(`.game`);
const GameTitle = GameTitleNode.querySelector(`.game__title`);

const GameTitleAccentTypography = new AccentTypography(
    GameTitle,
    400,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

export {
  TitleAccentTypography,
  DateAccentTypography,
  PrizesTitleAccentTypography,
  StoryTitleAccentTypography,
  RulesTitleAccentTypography,
  GameTitleAccentTypography
};
