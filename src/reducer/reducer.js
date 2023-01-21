//начальное состояние процесса скачивания веб-адреса картинки с сервера
export const initialState = 
{
    //веб-адрес картинки на сервере
    url:'',
    //флаг осуществления процесса скачивания веб-адреса картинки с сервера 
    loading: false,  
    //флаг, говорящий о том, что в процессе скачивания веб-адреса картинки с сервера произошла ошибка  
    error: false
}

export const reducer = (state = initialState, action) => 
{
    switch (action.type) 
    {
        //результат процесса запуска скачивания веб-адреса картинки помещаем в хранилище store
        case 'REQUESTED_DOG':
            return {
                url: '',
                loading: true,
                error: false
            };
        //полученный веб-адрес картинки action.url помещаем в хранилище store
        case 'REQUESTED_DOG_SUCCEEDED':
            return {
                url: action.url,
                loading: false,
                error: false
            };
        //сообщение об ошибке, возникшей в проводимом процессе, помещаем в хранилище store
        case 'REQUESTED_DOG_FAILED':
            return {
                url: '',
                loading: false,
                error: true
            };
        default: 
            return state;
    }
}