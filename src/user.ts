import { renderBlock } from './lib.js'
export function renderUserBlock (
  name: string, 
  userAvatar: string, 
  favoriteAmount: number
){
  let favoritesTotal
  let emptyFavorites: boolean
  console.log(emptyFavorites);
  if (favoriteAmount < 1){
    emptyFavorites = false;
    favoritesTotal = 'ничего нет'
  } else {
    emptyFavorites = true;
    favoritesTotal = favoriteAmount
  }
  console.log(emptyFavorites);
  // Рендер
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
          <i class="heart-icon${emptyFavorites ? ' active' : ''}"></i>${favoritesTotal}
          </p>
      </div>
    </div>
    `
  )
}
