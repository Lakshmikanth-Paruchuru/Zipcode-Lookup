({
	searchChange : function(component, event, helper) {
		var action = component.get("c.lookup");
        var getval = component.find("search").get("v.value");
        console.log("Zipcode::"+getval);
        if(getval==null || getval=='' || getval.length == 0 ||getval.length == 3 ||getval.length == 4){
            console.log("Entered if condition");
            var obj = component.get("v.objzip");
            obj.City =null;
            obj.State = null;
            //obj.countryAddr =null;
            console.log("obj"+JSON.stringify(obj));
            
            component.set("v.objzip",obj);
        }
        action.setParams({
            "zippy": getval,
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state=='SUCCESS'){
                var ret = response.getReturnValue();
                component.set("v.objzip",ret);
                console.log('show component value::'+JSON.stringify(component.get("v.objzip")));
                console.log("Return value is ::"+JSON.stringify(ret));
            }
        });
        $A.enqueueAction(action);
	}
})