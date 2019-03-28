const div = document.createElement("div");
//template literals for createWidget()
const widgetTemplateLiteral = `
  <div id='slider_button' class='animation_button' onClick="openWidget()">
  <div id="arrow" class='arrow'></div>
  </div>
  <div class='widget_body'>
    <section class='section_print_order'>
    <form>
        <div class="text_area_wrapper">
          <label class='order_label'>Podaj numer zlecenia</label>
          <textarea id="text_area"
                    class='text_area_class'
                  name="advanced"
                  rows="3" cols="14"
                  wrap="hard"></textarea>
        </div>
     
        <div class='action_button_wrapper' onClick="captureTextAreaData()"><span>Wyświetl</span>
        </div>
    	<div class='another_wrapper'>
        <div class='input_radio_wrapper'>
          <label class='first_radio' for='radio_order'>pełne</label>
          <input id='radio_order' type="radio" name="errand_type" value="order" checked>
        </div>
      
        <div class='input_radio_wrapper'>
          <label for='radio_invoice'>skrócone</label>
          <input id='radio_invoice' type="radio" name="errand_type" value="invoice">
        </div>
      
             <div class='input_radio_wrapper'>
          <label for='radio_url'>url</label>
          <input id='radio_url' type="radio" name="errand_type" value="invoice">
        </div>
    	<div>
    </form>
    </section>
    <section class='section_page_links'>
      <ul class="widget_link_list">
        <li class='link_list_item' onClick="window.open('http://wiki.przykladowyadres.pl:99/index.php/loremlorem')"><a>Wiki</a></li>
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/loremloremlorem')"><a>Licznik maszyn</a></li>
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/lorem.php?lorem=LOREM')"><a>Licznik wydruków</a></li>
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/lorem_lorem.php')"><a>Licznik prac</a></li>        
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/lorem/lorem/lorem?vx=x')"><a>Workflow rola</a></li>
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/lorem/lorem/call', '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,top=50,left=50 ,width=650,height=700')"><a>Wezwij serwis</a></li>
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/lorem/lorem/remove', '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,top=50,left=50 ,width=580,height=750')"><a>Materiały zużyj</a></li>
        <li class='link_list_item' onClick="window.open('https://przykladowyadres.pl/admin/lorem/lorem/add', '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,top=50,left=50 ,width=580,height=650')"><a>Materiały dodaj</a></li>
      </ul>
  </div>
`;

var errandArray = [];

(function createWidget() {
  div.setAttribute("id", "widget_wrapper");
  document.body.appendChild(div);
  div.innerHTML = widgetTemplateLiteral;
})();

const slider_button = document.getElementById("slider_button");
//showing and hidding widget
function openWidget() {
  document.getElementById("widget_wrapper").style.bottom = "0";
  slider_button.setAttribute("onClick", "closeWidget()");
  slider_button.innertext = "zwiń";
}
function closeWidget() {
  document.getElementById("widget_wrapper").style.bottom = "-127px";
  slider_button.setAttribute("onClick", "openWidget()");
  slider_button.innertext = "rozwiń";
}

function getSessionID(name) {
  if (document.cookie !== "") {
    const cookies = document.cookie.split(/; */);

    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split("=")[0];
      const cookieVal = cookies[i].split("=")[1];
      if (cookieName === decodeURIComponent(name)) {
        return decodeURIComponent(cookieVal);
      }
    }
  }
}

//capturing and formating data from text_area
function captureTextAreaData() {
  const invoice_radio = document.getElementById("radio_invoice");
  const order_radio = document.getElementById("radio_order");
  const url_radio = document.getElementById("radio_url");

  var textArea = document.getElementById("text_area");
  var string_letters = textArea.value;
  var cleanedString = textArea.value.replace(
    /[abcdefghijklmnopqrstuvwxyz]/g,
    ""
  );
  //creating array from cleaned string and removing empty entries
  errandArray = cleanedString.split("\n").filter(Boolean);
  errandArrayLetters = string_letters.split("\n").filter(Boolean);

  if (order_radio.checked) {
    for (i = 0; i < errandArray.length; i++) {
      window.open(
        `https://przykladowyadres.pl/admin/lorem.php?page=1&action=edit&oID=${
          errandArray[i]
        }&osCAdminID=${getSessionID("osCAdminID")}&accept=true`,
        "_blank"
      );
    }
    textArea.value = "";
  } else if (invoice_radio.checked) {
    for (i = 0; i < errandArrayLetters.length; i++) {
      let litera = errandArrayLetters[i].charAt(6);
      window.open(
        `https://przykladowyadres.pl/admin/lorem_info.php?oID=${
          errandArray[i]
        }&litera=${litera}&osCAdminID=${getSessionID("osCAdminID")}`,
        "_blank"
      );
    }
    textArea.value = "";
  } else if (url_radio.checked) {
    for (i = 0; i < errandArray.length; i++) {
      window.open(
        `https://przykladowyadres.pl/admin/lorem.php?oID=${
          errandArray[i]
        }&action=edit&osCAdminID=${getSessionID("osCAdminID")}`
      );
    }
    textArea.value = "";
  }
}
