import { renderBlock } from './lib.js';
import { ISearchFormData } from './interfaces/SearchFormData.js';

export function renderSearchFormBlock(
  arrivalDate: Date, 
  departureDate: Date
){
  // Извлекаем число, месяц и год для значений поля "Дата заезда" по умолчанию
  const arrivalDay = arrivalDate.getDate();
  const arrivalMonth = arrivalDate.getMonth() + 1;
  const arrivalYear = arrivalDate.getFullYear();
  // Добавляем новую дату для поля "Дата выезда" по умолчанию и извлекаем из нее даты
  const departureDay = departureDate.getDate();
  const departureMonth = departureDate.getMonth() + 1;
  const departureYear = departureDate.getFullYear();
  // Минимальная дата для выбора
  const minDateForChoice = new Date();
  const minDateDay = minDateForChoice.getDate();
  const minDateMonth = minDateForChoice.getMonth() + 1;
  const minDateYear = minDateForChoice.getFullYear();  
  // Максимальная дата для выбора
  const maxDateForChoice = new Date(minDateYear, minDateMonth + 1, 0);
  const maxDateDay = maxDateForChoice.getDate();
  const maxDateMonth = maxDateForChoice.getMonth() + 1;
  const maxDateYear = maxDateForChoice.getFullYear();
  // Рендер
  renderBlock('search-form-block', `
    <form id='searchForm'>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalYear}-${arrivalMonth}-${arrivalDay}" min="${minDateYear}-${minDateMonth}-${minDateDay}" max="${maxDateYear}-${maxDateMonth}-${maxDateDay}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureYear}-${departureMonth}-${departureDay}" min="${minDateYear}-${minDateMonth}-${minDateDay}" max="${maxDateYear}-${maxDateMonth}-${maxDateDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);

  // ЗАДАНИЕ №2 
  function searchItem(value: ISearchFormData): void {
    console.log(value)
  }  
    
  const form = document.getElementById('searchForm')
  const city = document.getElementById('city') as HTMLInputElement;
  const dateIn = document.getElementById('check-in-date') as HTMLInputElement;
  const dateOut = document.getElementById('check-out-date') as HTMLInputElement;
  const maxPrice = document.getElementById('max-price') as HTMLInputElement;
    
  city.addEventListener('change', function(e: Event): void{
    city.setAttribute('value', (e.target as HTMLInputElement).value)
  })
    
  dateIn.addEventListener('change', function(e: Event): void{
    dateIn.setAttribute('value', (e.target as HTMLInputElement).value)
  })
    
  dateOut.addEventListener('change', function(e: Event): void{
    dateOut.setAttribute('value', (e.target as HTMLInputElement).value)
  })
    
  maxPrice.addEventListener('change', function(e: Event): void{
    maxPrice.setAttribute('value', (e.target as HTMLInputElement).value)
  })
    
  form.addEventListener('submit', (event) => {
    
    const valueOfCity = (document.getElementById('city') as HTMLInputElement).value;
    const valueOfDateIn = (document.getElementById('check-in-date') as HTMLInputElement).value;
    const valueOfDateOut = (document.getElementById('check-out-date') as HTMLInputElement).value;
    const valueOfMaxPrice = (document.getElementById('max-price') as HTMLInputElement).value;
    
    event.preventDefault()
  
    searchItem({
      'city': valueOfCity,
      'dateIn': new Date(valueOfDateIn),
      'dateOut': new Date (valueOfDateOut),
      'maxPrice': +valueOfMaxPrice
    })
    
    return searchItem;
  })
}








