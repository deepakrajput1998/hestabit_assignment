import POSTApiCall from "../../PostAPI"
import PutApiCall from "../../PutAPI";

export const getListOfStudent=()=>{
return    POSTApiCall.getrequesturl("user/filter-students", {
      page: "1",
      limit: "10",
    });
}
export const updateStudent=(body)=>{
return PutApiCall.putrequesturl("user/update-student", body);
}