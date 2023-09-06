export const registerCfg = {
  title: 'Добро пожаловать!',
  inputs: [
    {
      name: 'Имя',
      for: 'name',
      type: 'text'
    },
    {
      name: 'E-mail',
      for: 'email',
      type: 'email'
    },
  ],
  button: "Зарегистрироваться",
  navTitle: 'Уже зарегистрированы?',
  navTo: '/signin',
  navLink: 'Войти'
}

export const loginCfg = {
  title:'Рады видеть!',
  inputs: [
    {
      name: 'E-mail',
      for: 'email',
      type: 'email'
    },
  ],
  button: 'Войти',
  navTitle: 'Ещё не зарегистрированы?',
  navTo: '/signup',
  navLink: 'Регистрация'
}

export const emailRegex = /^[-\w.]+@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}$/;

export const nameRegex = /^[a-zA-Zа-яА-Я\s-]{2,30}$/;

export const projects = [
  {
    type: 'Статичный сайт',
    link: 'https://applefa4ry.github.io/how-to-learn/'
  },
  {
    type: 'Адаптивный сайт',
    link: 'https://applefa4ry.github.io/russian-travel/'
  },
  {
    type: 'Одностраничное приложение',
    link: 'https://applefa4ry.github.io/react-mesto-auth'
  },
]

export const startDesktopFilms = 12

export const startTabletFilms = 8;

export const startMobileFilms = 5;

export const moreDesktopFilms = 3;

export const moreTabletOrMobileFilms = 2;