const groupCards = cards => {
  // localCards --> localGroupedCards
  const localGroupedCards = [];
  let group = [];
  cards.forEach((localCard, index) => {
    // index % 3; // 0 1 2    0 1 2     0 1 2
    group.unshift(localCard);
    if (index % 3 === 2) {
      localGroupedCards.unshift(group);
      group = [];
    }
  });
  localStorage.setItem('localGroupedCards', JSON.stringify(localGroupedCards));
};

export default groupCards;
