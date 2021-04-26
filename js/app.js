'use strict'

let userName = prompt('what is your name ?')
console.log(userName);
alert('welcome ' + userName + '!');
alert('let\'s know if you will know me !');



let studyField = prompt('expect which field in engineering I studied "industrial" , "civil" , "mechanical ?')

switch(studyField){

        case 'industrial':
        let image = '<img src="https://i.pinimg.com/564x/ea/62/47/ea62476360d531ee6c14cca8c372dad2.jpg" alt="good" width=400px>'
        document.write(image);
        break;
        case 'civil':
        alert('sorry , try again !')
        prompt('expect which field in engineering I have studied "industrial" , "civil" , "mechanical ?')
        break;
        case 'mechanical':
        alert('sorry , try again !')
        prompt('expect which field in engineering I have studied "industrial" , "civil" , "mechanical ?')

}

       let age = prompt(' how old am I do you think ?')
          if(age == '26'){
          let photo = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMgEbXzDYBYDIUKqrEzI5yPFu4AID8GBdUQ&usqp=CAU" alt="star" width=400px>'
          document.write(photo);  
          }else if(age != '26'){

          prompt('wrong! try again and guess how old am I do you think?')
}


     let answer = prompt('do you know me know (yes/no),(y/n)?').toLowerCase();
         if( answer == 'yes' || answer == 'y'){
            prompt('what is my name ?')
            console.log(answer);
        }else if (answer == 'no' || answer == 'n'){
            alert('so let\'s know more information !');
            console.log(answer);
        }

    let color = prompt('what do you think my favourite color is " purple or yellow" ?')
       if(color == 'purple'){
           let trueAnswer = '<img src="https://www.m2sys.com/blog/wp-content/uploads/2010/09/GreenCheck.jpg" alt="true" width=400px>'
           document.write(trueAnswer);
        
        }else if (color == 'yellow'){
            prompt('try again, "yellow or purple ;) ?')

        }

        let answer1 = prompt('do you know me know (yes/no),(y/n)? ').toLowerCase();
         if( answer1 == 'yes' || answer1 == 'y'){
            prompt('what is my name ?')
            alert( 'Good Job my friend ' + userName + ' :)');

        }else if (answer1 == 'no' || answer1 == 'n'){
            let sad = '<img src="https://thevoiceinc.com/wp-content/uploads/2021/02/sad-face.jpg" alt="sad" width=400px>'
          document.write(sad);
         }








  
