let message;

let login = prompt('Who are you', '');
message = (login === 'Employee')?'Hello':
          (login === 'Director')?'Greetings':
          (login === '')?'No login':'';
console.log(message);
