import { User } from './models/user.js'

export function saveUserDataInLocalStorage(
  userName: string,
  avatarUrl: string
): void {
  localStorage.setItem(
    'user',
    JSON.stringify({ username: userName, avatarUrl: avatarUrl })
  );
}

export function getUserData(userData: object): User {
  const rawUserData: any = localStorage.getItem('user');
  if (rawUserData) {
    userData = JSON.parse(rawUserData);
  }
  if (
    typeof userData === 'object' &&
    'username' in userData &&
    'avatarUrl' in userData
  ) {
    return userData as User;
  }
  return JSON.parse(rawUserData);
}

export function getFavoritesAmount(): number {
  const favoritesAmount = localStorage.getItem('favoritesAmount');
  if (favoritesAmount == null) return 0;
  return JSON.parse(favoritesAmount);
}

export function renderBlock (elementId: string, html: string) {
  const element: any = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast (message: any, action: any) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, action)
    }
  }
}

export interface ITodos {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function getTodosByCount(count: number): void {

  for (let i = 1; i <= count; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then<ITodos>(response => response.json())
      .then(json => {
        if (
          typeof json.userId === 'number'
          && typeof json.id === 'number'
          && typeof json.title === 'string'
          && typeof json.completed === 'boolean'
        ) {
          console.log(json)
        }
      }).catch((error) => {
        console.error(error)
      })
  }
}
