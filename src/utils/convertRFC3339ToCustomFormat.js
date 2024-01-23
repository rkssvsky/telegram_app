export default function convertRFC3339ToCustomFormat(rfc3339Date) {
  try {
    // Создание объекта Date из строки RFC3339
    const dt = new Date(rfc3339Date)

    // Получение компонентов даты и времени
    const day = dt.getDate()
    const month = dt.getMonth() + 1
    const year = dt.getFullYear() % 100
    const hours = dt.getHours()
    const minutes = dt.getMinutes()

    // Форматирование компонентов в желаемый формат
    const customFormat = `${day}.${month}.${year} ${hours}:${minutes
      .toString()
      .padStart(2, '0')}`

    return customFormat
  } catch (error) {
    // Обработка ошибки, если переданная строка не соответствует формату RFC3339
    return 'Некорректный формат даты и времени'
  }
}
