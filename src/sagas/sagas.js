import axios from 'axios';
//вытаскиваем компоненты сага-эффектов
import {takeLatest, put, call} from 'redux-saga/effects';
import { requestDog, requestDogSuccess, requestDogError } from '../action/action';

//функция скачивания веб-адреса картинки с сервера
function* fetchDogAsync() {
    try 
    {
        //начинается скачивание веб-адреса картинки с сервера, соответствующую функцию оборачиваем в компонент put
        yield put(requestDog());
        //скачиваем данные, связанные с веб-адресом картинки с сервера, соответствующий запрос оборачиваем в компонент call
        const data = yield call(() => 
        {
            return axios.get('https://dog.ceo/api/breeds/image/random');
        })
        //скачивание веб-адреса картинки с сервера успешно осуществлено, функцию оповещения об этом оборачиваем в компонент put
        yield put (requestDogSuccess(data.data));
    } 
    catch (error) 
    {
        //проводимый процесс окончился с ошибкой, функцию оповещения об этом оборачиваем в компонент put
        yield put(requestDogError());
    }
}

//функция контроля запуска саги при срабатывании метки FETCHED_DOG запускается функция fetchDogAsync
export function* watchFetchDog() 
{
    yield takeLatest('FETCHED_DOG', fetchDogAsync);
}