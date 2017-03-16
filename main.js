function createData(obj) {

    var data = obj;

	return{
		
		set: function(key, value){
			
			if (!(key && value)){
				return;
			}
			return data[key] = value;
			
		},
		
		get: function(key){
			
			return data[key];
			
		}     
		
	}
	
}

var data = createData({});

data.set("name","Janek");

console.log( data.get("name") );
