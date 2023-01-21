import {fetchDog} from './action/action';
import React from 'react';

//компонент проекта
class App extends React.Component {
  render () {
    return (
      <div>
        {/*Кнопка запуска скачивания с сервера веб-адреса картинки с собакой */}
        <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
        {
          //из props получаем результат о проведении указанного процесса
          this.props.loading
        ? 
          <p>Loading...</p>
        : 
          //из props получаем результат об ошибке, котороая возникла при проведении указанного процесса
          this.props.error 
        ? 
          <p>Error, try again</p> 
        : 
          //изображаем картинку, веб-адрес которой получен в результате проведенного скачивания
          <p><img alt="Items" src={this.props.url}/></p>}
      </div>
    )
  }
}



export default App;
