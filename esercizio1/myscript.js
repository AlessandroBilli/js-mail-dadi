const usersList = [
    'alessandrobilligu@gmail.com',
    'lucabamattingly@libero.it',
    'stevenfox@gmail.com',
    'tonysorrento@gmail.com',
   
  ];
  
  let accesso = false;

  const user = prompt(' Inserisci la tua email.');

  for (let i = 0; i < usersList.length; i++) {
    
    if (user === usersList[i]) {
      
      accesso = true;
      break;
    }
  }

  if (!accesso) {
    console.log('Non puoi accedere');
  } else {
    console.log('Bentornato' + [indice]);
  }