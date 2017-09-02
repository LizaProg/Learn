new XMLHttpRequest(); //объект js(у всех браузеров)
ActiveXObject('Microsoft.XMLHTTP') //(IE до 6 версии)
ActiveXObject('Msxml2.XMLHTTP') //(IE 7 версии)

function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        try {
            return new XMLHttpRequest()
        }
        catch (e) {

        }else if (window.ActiveXObject) {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP')
            }
            catch (e) {
            }
            try {
                return new ActiveXObject('Microsoft.XMLHTTP')
            }
            catch (e) {
            }
        }
        return null;
    }
}



