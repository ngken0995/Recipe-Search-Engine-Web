import axios from 'axios'


export default class APIService {
    
    
    static LoginUser(body) {

      return axios.post('http://127.0.0.1:8000/auth/', body, {
        headers: {
          'Content-Type':'application/json',
        }
      });
      /*
      fetch('http://127.0.0.1:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())*/

    }


    static RegisterUser(body) {

      return axios.post('http://127.0.0.1:8000/auth/', body, {
        headers: {
          'Content-Type':'application/json',
        }
      });
      /*
      fetch('http://127.0.0.1:8000/api/users/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())
    */
    }

    static InsertFood(body, token) {

      return axios.post('http://127.0.0.1:8000/api/favorites/', body, {
        headers: {
          'Content-Type':'application/json',
          'Authorization':`Token ${token}` 
        }
      });
    }

    static isLike(food_id, user, token) {

      const headers = {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      };

      return axios.get(`http://127.0.0.1:8000/api/favorites/?user=${user}&food_id=${food_id}`, { headers })
    
    }

    static DeleteFavorite(id, token) {

      const headers = {
        'Content-Type':'application/json',
        'Authorization':`token ${token}` 
      };

      return axios.delete(`http://127.0.0.1:8000/api/favorites/${id}/`, { headers })
      /*
      fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })*/

    }

}