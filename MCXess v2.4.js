//search ?lang in the URL

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


var path = window.location.pathname; //find URL pagename
var page = path.split("/").pop(); 
var language = getUrlParameter('lang'); //find lang in URL
var url;
var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
var pathArray = window.location.pathname.split( '/' );
var segment_1 = pathArray[1];
var segment_2 = pathArray[2];
var segment_3 = pathArray[3];


  
//check if the URL have (?lang), if no this will add the (?lang)

if ((language === "")&&(segment_1 === "")){

	url = '?lang=en'
	window.location.href = url;

} else if ((language === "")&&(segment_1 === "en")){

	url = '?lang=en'
	window.location.href = url;

} else if ((language === "")&&(segment_1 === "nl")){

	url = '?lang=nl'
	window.location.href = url;

} else {

	console.log("Page already have ?lang")
}

  
//Determine the redirection base on pagename

if ((language === "nl")&&(segment_1 === "nl")){

	console.log("Page is NL and in correct language");

} else if ((language === "en")&&(segment_1 === "nl")){

	switch (page){

	case 'home-nl':
		url = '/en/home-en?lang=en';
        window.location.href = url;
        break;
    case 'nummers':
		url = '/en/numbers?lang=en';
        window.location.href = url;
        break;
    case 'number-porting-nl':
		url = '/en/number-porting?lang=en';
        window.location.href = url;
        break;
    case 'packages-nl':
		url = '/en/packages?lang=en';
        window.location.href = url;
        break;
    case 'over-ons':
		url = '/en/about-us?lang=en';
        window.location.href = url;
        break;
    case 'success-stories-nl':
		url = '/en/success-stories?lang=en';
        window.location.href = url;
        break;
    case '0800-nummer':
		url = '/en/freephone-number?lang=en';
        window.location.href = url;
        break;
    case 'lokaal-nummer':
		url = '/en/local-numbers?lang=en';
        window.location.href = url;
        break;
    case 'nationaal-nummer':
		url = '/en/national-number?lang=en';
        window.location.href = url;
        break;
    case '0900-nummer':
		url = '/en/premium-rate-number?lang=en';
        window.location.href = url;
        break;
    case 'internationaal-nummer':
		url = '/en/universal-number?lang=en';
        window.location.href = url;
        break;
    case 'mobiel-nummer':
		url = '/en/mobile-number?lang=en';
        window.location.href = url;
        break;
    case 'custom-nl':
		url = '/en/custom?lang=en';
        window.location.href = url;
        break;
    case 'other-packages-nl':
		url = '/en/other-packages?lang=en';
        window.location.href = url;
        break;
    case 'rijkswaterstaat-nl':
		url = '/en/case-studies/rijkswaterstaat?lang=en';
        window.location.href = url;
        break;
    case 'acer-nl':
		url = '/en/case-studies/acer?lang=en';
        window.location.href = url;
        break;
    case 'ictual-nl':
		url = '/en/case-studies/ictual?lang=en';
        window.location.href = url;
        break;
    case 'transavia-nl':
		url = '/en/case-studies/transavia?lang=en';
        window.location.href = url;
        break;
    case 'affiliate-nl':
		url = '/en/partnering/affiliate?lang=en';
        window.location.href = url;
        break;
    case 'reseller-nl':
		url = '/en/partnering/reseller?lang=en';
        window.location.href = url;
        break;
    case 'cookiestatement-nl':
		url = '/en/cookiestatement?lang=en';
        window.location.href = url;
        break;
    case 'configurator-nl':
		url = '/en/configurator?lang=en';
        window.location.href = url;
        break;

}} else if ((language === "nl")&&(segment_1 === "en")){

	switch (page){

	case 'home-en':
		url = '/en/home-nl?lang=nl';
        window.location.href = url;
        break;
    case 'numbers':
		url = '/nl/nummers?lang=nl';
        window.location.href = url;
        break;
    case 'number-porting':
		url = '/nl/number-porting-nl?lang=nl';
        window.location.href = url;
        break;
    case 'packages':
		url = '/nl/packages-nllang=nl';
        window.location.href = url;
        break;
    case 'about-us':
		url = '/nl/over-ons?lang=nl';
        window.location.href = url;
        break;
    case 'success-stories':
		url = '/nl/success-stories-nl?lang=nl';
        window.location.href = url;
        break;
    case 'freephone-number':
		url = '/nl/0800-nummer?lang=nl';
        window.location.href = url;
        break;
    case 'local-numbers':
		url = '/nl/lokaal-nummer?lang=nl';
        window.location.href = url;
        break;
    case 'universal-number':
		url = '/nl/internationaal-nummer?lang=nl';
        window.location.href = url;
        break;
    case 'premium-rate-number':
		url = '/nl/0900-nummer?lang=nl';
        window.location.href = url;
        break;
    case 'national-number':
		url = '/nl/nationaal-nummer?lang=nl';
        window.location.href = url;
        break;
    case 'mobile-number':
		url = '/nl/mobiel-nummer?lang=nl';
        window.location.href = url;
        break;
    case 'custom':
		url = '/nl/custom-nl?lang=nl';
        window.location.href = url;
        break;
    case 'other-packages':
		url = '/nl/other-packages-nl?lang=nl';
        window.location.href = url;
        break;
    case 'rijkswaterstaat':
		url = '/nl/case-studies/rijkswaterstaat-nl?lang=nl';
        window.location.href = url;
        break;
    case 'acer':
		url = '/nl/case-studies/acer-nl?lang=nl';
        window.location.href = url;
        break;
    case 'ictual':
		url = '/nl/case-studies/ictual-nl?lang=nl';
        window.location.href = url;
        break;
    case 'transavia':
		url = '/nl/case-studies/transavia-nl?lang=nl';
        window.location.href = url;
        break;
    case 'affiliate':
		url = '/nl/partnering/affiliate-nl?lang=nl';
        window.location.href = url;
        break;
    case 'reseller':
		url = '/nl/partnering/reseller-nl?lang=nl';
        window.location.href = url;
        break;
    case 'cookiestatement':
		url = '/nl/cookiestatement-nl?lang=nl';
        window.location.href = url;
        break;
    case 'configurator':
		url = '/nl/configurator-nl?lang=nl';
        window.location.href = url;
        break;

}} else if ((language === "en")&&(segment_1 === "en")){

	console.log("Page is EN and in correct language");

}