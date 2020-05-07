const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

export const wrongCard = (card: string) => {
  return cards.some((element: string) => element === card.toUpperCase());
};
