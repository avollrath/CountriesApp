const btnStarts = document.querySelector('.starts');
const btnContains = document.querySelector('.contains');
const btnAZ = document.querySelector('.sortAZ');
const input = document.querySelector('input');
const countryContainer = document.querySelector('.country-container');
let isAZ = true;
const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas' ,'Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil' ,'Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica' ,'Cote D Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea' ,'Estonia','Ethiopia','Faroe Islands','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana' ,'Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India' ,'Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia' ,'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania' ,'Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia' ,'New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal' ,'Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles' ,'Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan' ,'Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad &amp; Tobago','Tunisia' ,'Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay' ,'Uzbekistan','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];

function categorizeCountries (arr) {
let searchString = '';
    if (btnStarts.classList.contains('selected')) searchString = new RegExp ('^' + input.value,'i');
    else searchString = new RegExp (input.value,'i');
foundItems = arr.filter(item => item.match(searchString));
return (foundItems);
}

function reverseList() {
if (isAZ) {
    isAZ = false;    
    showCountries(categorizeCountries(countries).reverse());
    btnAZ.innerHTML = '<i class="fas fa-sort-alpha-up"></i>';
            }
    else {
    isAZ = true;
    showCountries(categorizeCountries(countries));
    btnAZ.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';
    }
}

function changeColor(){
isAZ = true;
btnAZ.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';
btnStarts.classList.remove('selected');
btnContains.classList.remove('selected');    
event.target.classList.toggle('selected');
showCountries(categorizeCountries(countries));
}

function showCountries(arr) {
countryContainer.innerHTML ='';
if (!input.value) document.querySelector('p').innerHTML = 'Please enter some characters!';
else if (btnContains.classList.contains('selected')) document.querySelector('p').innerHTML = arr.length + '/' + (countries.length) +' countries contain the character(s: ' + input.value.toString();
else document.querySelector('p').innerHTML = arr.length + '/' + (countries.length) +' countries start with the character(s): ' + input.value.toString();
arr.forEach(country => {
let box = document.createElement('div');
box.className = 'countryBox';
box.innerHTML = country;
countryContainer.appendChild(box);
});
}

input.addEventListener('input', function(){showCountries(categorizeCountries(countries))});
btnAZ.addEventListener('click', reverseList);
btnStarts.addEventListener('click', changeColor);
btnContains.addEventListener('click', changeColor);
