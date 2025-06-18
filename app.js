const login = document.querySelector('.header__info__btn') // Кнопка логин сверху справа
const modal = document.querySelector('.popup')
const modalClose = document.querySelector ('.popup__close')

let searchLocation = document.querySelector('.search__location')
let loginGeneration = document.querySelector('.loginGeneration') // Логин в модальном окне
let loginGenerationInfo = document.querySelector('.loginGenerationInfo') // Логин в шапке, главный экран
let passGeneration = document.querySelector('.passGeneration') // Пароль в модальном окне
const autorizatButton = document.getElementById ('autorizat') // авторизация кнопка Entrance в модальном окне
let loginName = document.querySelector ('.login__name') // Имя при успешной авторизации в модальном окне
const modalLogin = document.querySelector ('.loginsucceses') // Модальное окно при успешной
const loginClose = document.querySelector ('.loginsucceses__close') // Закрытие окна модального окна с логином
const levelAsk = document.querySelector ('.askLevel') // В модальном окне после авторизации ВОПРОС ЗНАК
const levelAskInfo = document.querySelector ('.askLevelInfo') // предложение после нажатия ВОПРОС ЗНАКА
const deliveryBtn = document.querySelector('button.btn.form.active'); // Кнопка Деливери
const pickupBtn = document.querySelector('button.btn.form:not(.active)'); // Кнопка Пикап

const formDelivery = document.querySelector ('.header__delivery') // Форма заполнения адреса
let infoCounty = document.querySelector ('.countryFact') // Заполненная страна
let formCountry = document.querySelector ('.countryInfo') // Форма для заполнения страны
let formCity = document.querySelector ('.cityInfo') // Форма для заполнения города
let infoCity = document.querySelector ('.cityFact') // Заполненный город
let formStreet = document.querySelector ('.streetInfo') // Форма для заполнения улицы
let infoStreet = document.querySelector ('.streetFact') // Заполненная улица
let formHouse = document.querySelector ('.houseInfo') // Форма для заполнения дома
let infoHouse = document.querySelector ('.houseFact') // Заполненный дом
let formFlat =document.querySelector ('.flatInfo') // Форма для заполнения квартиры
let infoFlat = document.querySelector ('.flatFact') // Заполненная квартира
const findFood = document.getElementById ('findfood') // Кнопка поиск пищи


deliveryBtn.addEventListener('click', () => {
    deliveryBtn.classList.add ('active')
    pickupBtn.classList.remove ('active')
})
pickupBtn.addEventListener ('click', () => {
    pickupBtn.classList.add ('active')
    deliveryBtn.classList.remove ('active')
})

let isAuthorized = false;
//модальное окно для регистрации

function openLoginModal() {
  modal.style.display = 'flex'
}
// выход из модалки

modalClose.addEventListener('click', () => {
  modal.style.display = 'none'
})

loginClose.addEventListener ('click', () => {
    modalLogin.style.display = 'none'
})

// переключатель модальных окон
function toggleLogin () {
    if (!isAuthorized) {
        openLoginModal ()
    } else {
        successKey ()
    }
}


// Логин 
login.addEventListener('click',  toggleLogin) 
modalClose.addEventListener ('click', () => {
    modal.style.display = 'none'
})
modal.addEventListener ('click', (event) => {
    if (event.target.classList === 'modal') 
        {
console.log ('1')
    }
})


// Логирование

function autorizationFunc () {
autorizatButton.addEventListener ('click', () => {
if (loginGeneration.value === '' && passGeneration.value === '') {
      alert ('Введи логин и пароль')
 return 
   
} else if (loginGeneration.value === '') {
      alert ('Введи логин')
  return
} else if (passGeneration.value === '') {
   alert ('Введи пароль') 
          return
} else if (loginGeneration.value === 'Login' || loginGeneration.value === 'login' ) {
alert ('Введи логин')
} else {
    loginGenerationInfo.textContent = loginGeneration.value 
     isAuthorized = true;
     modal.style.display = 'none'

   
}
} )
}
  // Авторизован успешно
function successKey () {
         modalLogin.style.display ='flex';
         loginName.textContent = loginGenerationInfo.textContent


}



// кнопка логин и все ее функции
if (!isAuthorized) {
autorizationFunc () 

} else if (isAuthorized) {
    
    login.addEventListener ('click', () => 
    successKey () 
)

}



// Локация куда доставка

let isFormDelivery = false;

searchLocation.addEventListener ('click', () => {
    formDelivery.style.display = 'flex'
    
})




// Тут дописать код ниже 

const countryCities = {
  "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan"],
  "USA": ["New York", "Los Angeles", "Chicago", "Houston"],
  "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
};
formCountry.addEventListener('change', () => {
  const selectedCountry = formCountry.value;
  formCity.innerHTML = '<option value="">Select a city</option>';
  formCity.disabled = true;
  if (selectedCountry && countryCities[selectedCountry]) {
    countryCities[selectedCountry].forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      formCity.appendChild(option);
    });
    formCity.disabled = false;
  }
})

    findfood.addEventListener ('click', () => {

let isValid = true; // Если заполнено, то тру

     if (formCountry.value === '' ) {
         formCountry.classList.add('input-error');
            isValid = false;
     } else {
        formCountry.classList.add('input-correct');
     }

     if (formCity.value === '') {
        formCity.classList.add('input-error');
        isValid = false;

     } else {
        formCity.classList.add('input-correct')
     } 
     if (formStreet.value === '') {
        formStreet.classList.add('input-error');
        isValid = false;
     } else {
        formStreet.classList.add('input-correct')
     }

     if (formHouse.value === '') {
        formHouse.classList.add('input-error') 
         isValid = false;
     } else {
        formHouse.classList.add('input-correct')
     }
     if (formFlat.value === '') {
        formFlat.classList.add('input-error') 
        isValid = false;
     } else {
        formFlat.classList.add('input-correct')
     }

     if (isValid) {
     infoCounty.textContent = formCountry.value;
     infoCity.textContent = formCity.value;
     infoStreet.textContent = formStreet.value;
     infoHouse.textContent = formHouse.value;
     infoFlat.textContent = formFlat.value;

       setTimeout(() => {
        formDelivery.style.display = 'none'; // 
    }, 1800);
     }


    })

  // в Модальном окне после успешного логирования

  levelAsk.addEventListener ('click', () => {
    levelAskInfo.style.display ='block'
  })