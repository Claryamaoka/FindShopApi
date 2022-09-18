class ValidationService{
    validateCreate(obj, db){
        if(obj.name == null || obj.name == "")
            return false;  
        if(db.find(x => x.name == obj.name))
            return false;
        
        return true;
    }

    validateUpdate(obj,db){
        if(db.find(x => x.id == obj.id)){
            return false;
        }
        return true;
    }
}

module.exports = ValidationService;
