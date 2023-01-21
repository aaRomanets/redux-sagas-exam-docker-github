//начинаем процесс скачивания веб-адреса картинки с сервера
export const requestDog = () => 
{
    return {type: 'REQUESTED_DOG'}
}

//произвели процесс скачивания веб-адреса картинки с сервера, полученный веб-адрес url отправляем в store
export const requestDogSuccess = (data) => 
{
    return {type: 'REQUESTED_DOG_SUCCEEDED', url: data.message}
}

//в процессе скачивания веб-адреса картинки с сервера произошла ошибка
export const requestDogError = () => 
{
    return {type: 'REQUESTED_DOG_FAILED'}
}

//функция активации метки запуска саги FETCHED_DOG
export const fetchDog = () => 
{
    return {type: 'FETCHED_DOG'}
}