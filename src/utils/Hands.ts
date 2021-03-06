export enum Message {
  ALWAYS_RAISE = '¡Subimos siempre!',
  RAISE = 'Subimos',
  FOLD = 'Abandonamos',
  CALL = 'Vemos',
  CHECK = 'Pasamos',
}

export enum Position {
  EARLY = 'Posición temprana',
  MIDDLE = 'Posición media',
  LAST = 'Posición última',
  SMALL_BLIND = 'Ciega pequeña',
  BIG_BLIND = 'Ciega grande',
}

export enum OpponentActions {
  ALL_DROP_OUT = 'Todos abandonan',
  AN_OPPONENT_GOES = 'Un oponente va',
  TWO_OR_MORE_GOES = 'Dos o más oponentes van',
  AN_RISE_AND_NOBODY_GOES = 'Hay exactamente una subida y nadie ve',
  AN_RISE_AND_ALMOST_ONE_GOES = 'Hay exactamente una subida y al menos un oponente ve',
  AN_RISE_EXACTLY_AFTER_YOU = 'Ha habido exactamente una subida por detrás de tí',
  MORE_THAN_ONE_RISE_AFTER_YOU = 'Ha habido más de una subida por detrás de tí',
  MORE_THAN_ONE_RISE_BEFORE_YOU = 'Ha habido más de una subida por delante de tí',
}

export const Hands = {
  VERY_STRONG_HAND: ['AAO', 'KKO', 'QQO', 'AKS', 'AKO'],
  STRONG_HAND: ['JJO', 'TTO', '99O', 'AQS', 'AQO', 'AJS'],
  MEDIUM_HAND: ['AJO', 'ATS', 'ATO', 'KQS', 'KQO'],
  LESS_STRONG_HAND: ['88', '77', '66', '55', '44', '33', '22', 'KJS', 'KTS', 'QJS', 'QTS', 'JTS', 'T9S'],
  MIX_HAND: ['KJO', 'KTO', 'QJO', 'QTO', 'JTO', 'A9S', 'A8S', 'A7S', 'A6S', 'A5S', 'A4S', 'A3S', 'A2S', 'K9S', '98S', '87S'],
};

export const PlayerGaps: any = {
  2: {
    0: 'BIG_BLIND',
    1: 'SMALL_BLIND',
  },
  3: {
    0: 'BIG_BLIND',
    1: 'LAST',
    2: 'SMALL_BLIND',
  },
  4: {
    0: 'BIG_BLIND',
    1: 'EARLY',
    2: 'LAST',
    3: 'SMALL_BLIND',
  },
  5: {
    0: 'BIG_BLIND',
    1: 'EARLY',
    2: 'MIDDLE',
    3: 'LAST',
    4: 'SMALL_BLIND',
  },
  6: {
    0: 'BIG_BLIND',
    1: 'EARLY',
    2: 'EARLY',
    3: 'MIDDLE',
    4: 'LAST',
    5: 'SMALL_BLIND',
  },
  7: {
    0: 'BIG_BLIND',
    1: 'EARLY',
    2: 'EARLY',
    3: 'MIDDLE',
    4: 'MIDDLE',
    5: 'LAST',
    6: 'SMALL_BLIND',
  },
  8: {
    0: 'BIG_BLIND',
    1: 'EARLY',
    2: 'EARLY',
    3: 'MIDDLE',
    4: 'MIDDLE',
    5: 'LAST',
    6: 'LAST',
    7: 'SMALL_BLIND',
  },
  9: {
    0: 'BIG_BLIND',
    1: 'EARLY',
    2: 'EARLY',
    3: 'EARLY',
    4: 'MIDDLE',
    5: 'MIDDLE',
    6: 'LAST',
    7: 'LAST',
    8: 'SMALL_BLIND',
  },
};

export const Action: any = {
  VERY_STRONG_HAND: {
    EARLY: Message.ALWAYS_RAISE,
    MIDDLE: Message.ALWAYS_RAISE,
    LAST: Message.ALWAYS_RAISE,
    SMALL_BLIND: Message.ALWAYS_RAISE,
    BIG_BLIND: Message.ALWAYS_RAISE,
  },
  STRONG_HAND: {
    EARLY: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    MIDDLE: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.RAISE,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    LAST: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.RAISE,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    SMALL_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.RAISE,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    BIG_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.RAISE,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
  },
  MEDIUM_HAND: {
    EARLY: {
      ALL_DROP_OUT: Message.FOLD,
      AN_OPPONENT_GOES: Message.FOLD,
      TWO_OR_MORE_GOES: Message.FOLD,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    MIDDLE: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    LAST: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    SMALL_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    BIG_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.RAISE,
      TWO_OR_MORE_GOES: Message.RAISE,
      AN_RISE_AND_NOBODY_GOES: Message.CALL,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
  },
  LESS_STRONG_HAND: {
    EARLY: {
      ALL_DROP_OUT: Message.FOLD,
      AN_OPPONENT_GOES: Message.FOLD,
      TWO_OR_MORE_GOES: Message.CALL,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    MIDDLE: {
      ALL_DROP_OUT: Message.FOLD,
      AN_OPPONENT_GOES: Message.FOLD,
      TWO_OR_MORE_GOES: Message.CALL,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    LAST: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.CALL,
      TWO_OR_MORE_GOES: Message.CALL,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    SMALL_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.CALL,
      TWO_OR_MORE_GOES: Message.CALL,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    BIG_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.CHECK,
      TWO_OR_MORE_GOES: Message.CHECK,
      AN_RISE_AND_NOBODY_GOES: Message.CALL,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
  },
  MIX_HAND: {
    EARLY: {
      ALL_DROP_OUT: Message.FOLD,
      AN_OPPONENT_GOES: Message.FOLD,
      TWO_OR_MORE_GOES: Message.FOLD,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    MIDDLE: {
      ALL_DROP_OUT: Message.FOLD,
      AN_OPPONENT_GOES: Message.FOLD,
      TWO_OR_MORE_GOES: Message.FOLD,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    LAST: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.FOLD,
      TWO_OR_MORE_GOES: Message.CALL,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    SMALL_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.CALL,
      TWO_OR_MORE_GOES: Message.CALL,
      AN_RISE_AND_NOBODY_GOES: Message.FOLD,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.FOLD,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
    BIG_BLIND: {
      ALL_DROP_OUT: Message.RAISE,
      AN_OPPONENT_GOES: Message.CHECK,
      TWO_OR_MORE_GOES: Message.CHECK,
      AN_RISE_AND_NOBODY_GOES: Message.CALL,
      AN_RISE_AND_ALMOST_ONE_GOES: Message.CALL,
      AN_RISE_EXACTLY_AFTER_YOU: Message.CALL,
      MORE_THAN_ONE_RISE_AFTER_YOU: Message.FOLD,
      MORE_THAN_ONE_RISE_BEFORE_YOU: Message.FOLD,
    },
  },
};
