document.addEventListener('DOMContentLoaded', function () {
    // Обработчик для кнопки выбора путеводителя
    document.getElementById('selectGuideBtn').addEventListener('click', function () {
        // Открываем модальное окно выбора путеводителя
        $('#guideSelectionModal').modal('show');
    });

    // Обработчик для кнопки оформления заявки
    document.getElementById('submitRequestBtn').addEventListener('click', function () {
        // Получаем значения из полей формы
        const selectedRoute = document.getElementById('routeSelect').value;
        const selectedDate = document.getElementById('dateInput').value;
        const selectedTime = document.getElementById('timeInput').value;

        // Можете добавить дополнительную логику для обработки данных, например, отправка на сервер
        console.log('Выбранный маршрут:', selectedRoute);
        console.log('Выбранная дата:', selectedDate);
        console.log('Выбранное время:', selectedTime);

        // Закрываем модальное окно
        $('#guideSelectionModal').modal('hide');
    });
});
