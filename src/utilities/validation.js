export const validate = (event) => {
    let obj = {};
    // eslint-disable-next-line default-case
    switch(event.target.name){
        case 'name':{
            console.log(/[0-9-/:-@[-`{-~]/gi.test(event.target.value));
            if(/[0-9-/:-@[-`{-~]/gi.test(event.target.value)){
                obj["name"] = "No special character or number is allowed"
            }else{
                obj["name"]=""
            }   
            return obj; 
        }
        // eslint-disable-next-line no-fallthrough
        case 'email':{
            if(event.target.value.length === 0){ obj["email"]="";return obj;}    
            if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/gi.test(event.target.value)){
                    obj["email"] = "Not  a valid email"
                }else{
                    obj["email"]=""
                } 
                return obj; 

        }
    }
}

export function validateFileType(fileName){
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    let obj = {};
    if (extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
        obj['id'] ="";
        return obj;
    }else{
        obj['id'] ="only JPG/PNG are allowed";
        return obj;
    }   
}