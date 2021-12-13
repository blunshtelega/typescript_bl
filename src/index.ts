import { renderSearchFormBlock} from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { getUserData, renderToast, saveUserDataInLocalStorage, getTodosByCount} from './lib.js'

window.addEventListener('DOMContentLoaded', () => {

  saveUserDataInLocalStorage('Pavel','./img/avatar.png');
  const userData: object = [];
  const user = getUserData(userData);
  renderUserBlock(user.username, user.avatarUrl, 3)

  renderSearchFormBlock(new Date(Date.now() + ( 3600 * 1000 * 24)), new Date(Date.now() + ( 3600 * 1000 * 72)))
  renderSearchStubBlock()
  getTodosByCount(2)

  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
