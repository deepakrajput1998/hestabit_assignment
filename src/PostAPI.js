let baseurl=process.env.REACT_APP_BASE_URL;

const POSTApiCall={
    getrequesturl:(url,body,token=null) =>{
      return fetch(baseurl+url,{
        method:'POST',
        headers:{'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json',
        Authorization: 'Bearer '+token,
        },
        body:JSON.stringify(body)
      })
    }
}
export default POSTApiCall;