export enum Message {
	ALWAYS_RAISE = '¡Subimos siempre!',
	RAISE = 'Subimos',
	FOLD = 'Abandonamos',
	CALL = 'Vemos',
	CHECK = 'Pasamos',
}

// export enum HANDS = {
// 	'VERY_STRONG_HAND': ['AAD','KKD','QQD','AKS','AKO'],
// 	'STRONG_HAND': ['JJD', 'TTD', '99D', 'AQS', 'AQO', 'AJS'],
// 	'MEDIUM_HAND': ['AJO', 'ATS', 'ATO', 'KQS', 'KQO'],
// 	'LESS_STRONG_HAND': ['88', '77', '66', '55', '44', '33', '22', 'KJS', 'KTS', 'QJS', 'QTS', 'JTS', 'T9S'],
// 	'MIX_HAND': ['KJO', 'KTO', 'QJO', 'QTO', 'JTO', 'A9S', 'A8S', 'A7S', 'A6S','A5S','A4S','A3S','A2S','K9S','98S','87S']
// };

// {
// 	'VERY_STRONG_HANDS': {
// 		'EARLY_POSITION': Message.ALWAYS_RAISE,
// 		'MEDIUM_POSITION': Message.ALWAYS_RAISE,
// 		'LAST_POSITION': Message.ALWAYS_RAISE,
// 		'SMALL_BLIND': Message.ALWAYS_RAISE,
// 		'BIG_BLIND': Message.ALWAYS_RAISE,
// 	},
// 	'STRONG_HANDS': {
// 		'EARLY_POSITION': {
// 			'ALL_DROP_OUT': Message.RAISE,
// 			'AN_OPPONENT_GOES': Message.RAISE,
// 			'TWO_OR_MORE_GOES': Message.RAISE,
// 			'AN_RISE_AND_NOBODY_GOES': Message.FOLD,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': Message.CALL,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,

// 		},
// 		'MEDIUM_POSITION': {
// 			'ALL_DROP_OUT': Message.RAISE,
// 			'AN_OPPONENT_GOES': Message.RAISE,
// 			'TWO_OR_MORE_GOES': Message.RAISE,
// 			'AN_RISE_AND_NOBODY_GOES': Message.RAISE,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': Message.CALL,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'LAST_POSITION': {
// 			'ALL_DROP_OUT': Message.RAISE,
// 			'AN_OPPONENT_GOES': Message.RAISE,
// 			'TWO_OR_MORE_GOES': Message.RAISE,
// 			'AN_RISE_AND_NOBODY_GOES': Message.RAISE,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': Message.CALL,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'SMALL_BLIND': {
// 			'ALL_DROP_OUT': Message.RAISE,
// 			'AN_OPPONENT_GOES': Message.RAISE,
// 			'TWO_OR_MORE_GOES': Message.RAISE,
// 			'AN_RISE_AND_NOBODY_GOES': Message.RAISE,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': Message.CALL,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'BIG_BLIND': {
// 			'ALL_DROP_OUT': Message.RAISE,
// 			'AN_OPPONENT_GOES': Message.RAISE,
// 			'TWO_OR_MORE_GOES': Message.RAISE,
// 			'AN_RISE_AND_NOBODY_GOES': Message.RAISE,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': Message.CALL,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		}
// 	},
// 	'MEDIUM_HANDS': {
// 		'EARLY_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,

// 		},
// 		'MEDIUM_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'LAST_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'SMALL_BLIND': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'BIG_BLIND': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		}
// 	},
// 	'LESS_STRONG_HANDS': {
// 		'EARLY_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,

// 		},
// 		'MEDIUM_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'LAST_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'SMALL_BLIND': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'BIG_BLIND': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		}
// 	},
// 	'MIX_HANDS': {
// 		'EARLY_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,

// 		},
// 		'MEDIUM_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'LAST_POSITION': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'SMALL_BLIND': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		},
// 		'BIG_BLIND': {
// 			'ALL_DROP_OUT': ,
// 			'AN_OPPONENT_GOES': ,
// 			'TWO_OR_MORE_GOES': ,
// 			'AN_RISE_AND_NOBODY_GOES': ,
// 			'AN_RISE_AND_ALMOST_ONE_GOES': ,
// 			'AN_RISE_EXACTLY_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_AFTER_YOU': ,
// 			'MORE_THAN_ONE_RISE_BEFORE_YOU': ,
// 		}
// 	}
// }