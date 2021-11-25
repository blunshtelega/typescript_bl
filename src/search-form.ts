import { renderBlock } from './lib.js';
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
    <form>
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
}
