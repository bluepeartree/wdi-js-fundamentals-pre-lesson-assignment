function addscore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
  }
  return currentScore + scoreToAdd;
}

var score = 0;

score = addscore(score, 'dot');
score = addscore(score, 'dot');
score = addscore(score, 'dot');
score = addscore(score, 'powerPellet');
score = addscore(score, 'firstGhost');
score = addscore(score, 'secondGhost');
console.log('Your score: '+ score);
