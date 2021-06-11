import axios from 'axios'


export default class APIService {
    
    static UpdateArticle(article_id, body, token) {
      const article = body;
      const headers = { 
          'Content-Type':'application/json',
          'Authorization':`Token ${token}` 
      };
      
     return axios.put(`http://127.0.0.1:8000/api/articles/${article_id}/`, article, { headers });
     
     
     /*
     fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
        'method':'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

     }).then(resp => resp.json())
     */

    }

    static InsertArticle(body, token) {

      return axios.post('http://127.0.0.1:8000/api/articles/', body, {
        headers: {
          'Content-Type':'application/json',
          'Authorization':`Token ${token}` 
        }
      });
    }
      
      /*
      fetch('http://127.0.0.1:8000/api/articles/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }*/

    static DeleteArticle(article_id, token) {

      const headers = {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      };

      return axios.delete(`http://127.0.0.1:8000/api/articles/${article_id}/`, { headers })
      
      /*
      fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })*/

    }

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

    static isLike(food_id, token) {

      const headers = {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      };

      return axios.get(`http://127.0.0.1:8000/api/favorites/?token_id=${token}&food_id=${food_id}`, { headers })
    
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