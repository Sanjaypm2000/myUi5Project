//Scaffolding , AMD
sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/xml/XMLModel",
    "sap/ui/model/resource/ResourceModel"
    
], function(JSONModel, XMLModel, ResourceModel) {
    return {
        createJSONModel: function(filePath){
            //Step 1: Create a brand new model object
           // var oModel = new sap.ui.model.json.JSONModel(); or
            var oModel = new JSONModel();

            //Step 2: Set or Load data into the model
           // oModel.loadData("/models/mockdata/sample.json");
            oModel.loadData(filePath);
            // oModel.setData({
            //     "empStr": {
            //         "empId": "1003",
            //         "empName": "Anubhav",
            //         "salary": 90000,
            //         "currency": "AED",
            //         "smoker": true,
            //         "gender": "data:image/png;base64,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",
            //         "mStat": "S",
            //         "rating": 4,
            //         "city": "Gurgaon",
            //         "country": "IN"
            //     }
            // });


            return oModel;
        },
        createXMLModel: function(){
            var oModel = new XMLModel();
            oModel.loadData("models/mockdata/mydata.xml");
            return oModel;

        },
        createResourceModel: function(){
            var oModel = new ResourceModel({
                bundleUrl: 'i18n/i18n.properties'
            });
            return oModel;
            
        }
    };
});