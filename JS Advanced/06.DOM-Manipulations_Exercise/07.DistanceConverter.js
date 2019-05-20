function attachEventsListeners() {
    $("#convert").click(convertDistance)

    function convertDistance() {
        let input = Number($("#inputDistance").val());
        let fromUnit = $("#inputUnits option:selected").val();
        let toUnit = $("#outputUnits option:selected").val();
        let $result = $("#outputDistance").css("display", "block");
        
        switch (fromUnit) {
            case "km":
                convertFromMeters(input * 1000);
                break;
        
            case "m":
                convertFromMeters(input);
                break;
        
            case "cm":
                convertFromMeters(input * 0.01);
                break;
        
            case "mm":
                convertFromMeters(input * 0.001);
                break;
        
            case "mi":
                convertFromMeters(input * 1609.34);
                break;

            case "yrd":
                convertFromMeters(input * 0.9144);
                break;
        
            case "ft":
                convertFromMeters(input * 0.3048);
                break;
        
            case "in":
                convertFromMeters(input * 0.0254);
                break;    
        }   
        
        function convertFromMeters(valueInMeters) {
            switch (toUnit) {
                case "km":
                    $result.val(valueInMeters / 1000);
                    break;
            
                case "m":
                    $result.val(valueInMeters);
                    break;
            
                case "cm":
                    $result.val(valueInMeters * 100);
                    break;
            
                case "mm":
                    $result.val(valueInMeters  * 1000);
                    break;
            
                case "mi":
                    $result.val(valueInMeters / 1609.34);
                    break;
    
                case "yrd":
                    $result.val(valueInMeters / 0.9144);
                    break;
            
                case "ft":
                    $result.val(valueInMeters / 0.3048);
                    break;
            
                case "in":
                    $result.val(valueInMeters / 0.0254);
                    break;    
            }
        }
    }
}