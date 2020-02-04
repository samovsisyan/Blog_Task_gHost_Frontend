// import axios from 'axios';
//
//
// const API_URL = "http://localhost:8000/";
//
// export function getBlog() {
//     axios({
//         method: 'get',
//         url: "http://localhost:8000/blog"
//     })
//         .then(res => console.log(res))
//         .cetch(err => console.log(err));
//
// }
//
// export default getBlog;


// const API_URL = 'http://localhost:8000';
//
// export function getBlog(data) {
//     return fetch(API_URL + "/blog",{
//         method: 'get',
//         body: JSON.stringify(data)
//     }).then(r => r.json())
// }
//
// export default getBlog;


// import axios from 'axios';
//
// // axios.defaults.withCredentials = true;
//
// const API_URL = 'http://localhost:8000';
// // axios.defaults.baseURL = API_URL;
//
// export function getBlog(data) {
//     return axios.get(`${API_URL}/`, {data})
// }
//
// // export function getBlog(data) {
// //     return axios.post('/blog', {
// //         title: data.title,
// //         description: data.description,
// //     });
// // }


import axios from 'axios';


// const API_URL = "http://localhost:8000/";

export function getBlog() {
    axios({
        method: 'get',
        url: "http://localhost:8000/blog",
        responseType: 'stream'

    })
        .then(res => console.log(res))
        .cetch(err => console.log(err));

}

export default getBlog;
