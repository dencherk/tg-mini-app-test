// Функция обработки бронирования тура
function bookTour(destination, tourName) {
  alert(`Вы выбрали тур: ${tourName} в ${destination}. Пожалуйста, заполните форму ниже, чтобы оформить заявку.`);
  document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
}

// Обработка подачи заявки
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  alert(`Спасибо за заявку, ${name}! Мы свяжемся с вами по email: ${email}.`);
});
