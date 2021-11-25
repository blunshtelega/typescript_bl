import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { getUserData, renderToast, saveUserDataInLocalStorage } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {

  saveUserDataInLocalStorage('Pavel','./img/avatar.png');
  let userData: unknown;
  const user = getUserData(userData);
  renderUserBlock(user.username, user.avatarUrl, 3)

  renderSearchFormBlock(new Date(Date.now() + ( 3600 * 1000 * 24)), new Date(Date.now() + ( 3600 * 1000 * 72)))
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
