let baseurl=process.env.REACT_APP_BASE_URL;

const PutApiCall={
  putrequesturl:(url,body,token)=>{
      return fetch(baseurl+url,{
        method:'PUT',
        headers:{
        'Content-Type':'application/json',
        Authorization:'Bearer '+token
        },
        body:JSON.stringify(body)
      })
    }
}
export default PutApiCall;