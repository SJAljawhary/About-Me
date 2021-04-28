'use strict';

let userName = prompt('what is your name ?');
console.log(userName);
alert('welcome ' + userName + '!');
alert('let\'s know if you will know me !');


let score = 0;
function studying() {
  let studyField = prompt('expect which field in engineering I studied "industrial" , "civil" , "mechanical ?');

  switch (studyField) {

  case 'industrial':

    alert('Good job :)');
    // eslint-disable-next-line no-case-declarations
    let image = '<img src="https://i.pinimg.com/564x/ea/62/47/ea62476360d531ee6c14cca8c372dad2.jpg" alt="good" width=400px>';
    document.write(image);
    score++;
    break;
  case 'civil':
    alert('sorry , try again !');
    prompt('expect which field in engineering I have studied "industrial" , "civil" , "mechanical ?');
    break;
  case 'mechanical':
    alert('sorry , try again !');
    prompt('expect which field in engineering I have studied "industrial" , "civil" , "mechanical ?');

  }
}
studying();


function howOld() {
  let age = prompt(' how old am I do you think ?');
  if (age === '26') {
    alert('hmmm I think you will do it !');
    let photo = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMgEbXzDYBYDIUKqrEzI5yPFu4AID8GBdUQ&usqp=CAU" alt="star" width=400px>';
    document.write(photo);
    score++;
  } else if (age !== '26') {
    alert('wrong! try again please');
    prompt('guess how old am I do you think?');
    console.log(age);
  }
}
howOld();



let answer = prompt('do you know me know (yes/no),(y/n)?').toLowerCase();
if (answer === 'yes' || answer === 'y') {
  alert('Great!');
  score++;
  prompt('what is my name ?');
  console.log(answer);
} else if (answer === 'no' || answer === 'n') {
  alert('so let\'s know more information !');
  console.log(answer);
}

function favColor() {
  let color = prompt('what do you think my favourite color is " purple or yellow" ?');
  if (color === 'purple') {
    alert('yes , I think you love it too !:)');
    let trueAnswer = '<img src="https://www.m2sys.com/blog/wp-content/uploads/2010/09/GreenCheck.jpg" alt="true" width=400px>';
    document.write(trueAnswer);
    score++;

  } else if (color === 'yellow') {
    alert('try again ! :(');
    prompt('"yellow or purple" ;) ?');

  }
}
favColor();


let answer1 = prompt('do you know me know (yes/no),(y/n)? ').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  prompt('what is my name ?');
  alert('Good Job my friend ' + userName + ' :)');
  score++;

} else if (answer1 === 'no' || answer1 === 'n') {
  alert('DON\'T give up , you will know !');
  let sad = '<img src="https://thevoiceinc.com/wp-content/uploads/2021/02/sad-face.jpg" alt="sad" width=400px>';
  document.write(sad);
}

function university() {
  let study = prompt('In which university i have studied do you think "JUST" or "YARMOUK" ?').toUpperCase();
  if (study === 'JUST') {
    alert('TRUE ! I love it so much');
    score++;
  } else if (study === 'YARMOUK') {
    alert('lovely one but no ! try again ;)');
    prompt('which one do you think now ?');
  }
}
university();

function myJob() {
  let job = prompt(' Please read the second paragraph, I think this will help you, so my last job was "teacher , chashier" ?');
  if (job === 'cashier') {
    alert('Unfortenatly yes :P !');
    score++;
  } else if (job === 'teacher') {
    alert('No no !!');
    prompt('So what do you think now ?');
  }
}
myJob();


function worked() {
  let years = prompt('guess how many years I have worked in this field ?');

  for (let i = 0; i <= 3; i++) {

    if (years === '3') {

      alert('True !');
      score++;
      break;

    } else if (years < '3') {
      alert('too low!');
      years = prompt('guess again ?');

    } else if (years > '3') {
      alert('too high!');
      years = prompt('guess again ?');

    }

    alert('the true answer is 3 years .');
  }
}
worked();


function brand() {
  let sportBrand = ['nike', 'adidas', 'puma', 'reebok',];
  let ask7 = prompt('what is my favourite sport brand ?');
  for (let i = 0; i < 5; i++) {
    if (ask7 === sportBrand[i]) {
      alert('yes It\'s one of the list');

      score++;
      break;
    }
    else {
      alert('sorry It\'s not one of the list');
      ask7 = prompt('what is my favourite sport brand?');

    }

  } alert('the true answers are: ' + ' ,nike ' + ' ,adidas ' + ' ,puma ' + ' ,reebok ');
}
brand();

alert('your final score is ' + score);









