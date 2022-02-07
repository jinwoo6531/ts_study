import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/todos/1'


//json 데이터 받아오기
axios .get(url).then((response) => {
    console.log(response.data)
})