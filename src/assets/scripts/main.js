/* Functions
============================================================================ */

function formValidator() { 

  let checkForm = function (form) {
    
    //console.log(form);

    /* Hier bitte die Validierung einfügen*/

    let error = false;
    let errorobject = null; //Objekt, welches Fehler auslöst

    
    //Das ist ultra hässlich programmiert und geht mit einem query selector sicherlich schöner ^^
    form.dateiart.removeAttribute('class');
    form.beschreibung.removeAttribute('class');
    form.rechte.removeAttribute('class');
    form.quelle.removeAttribute('class');
    form.datum.removeAttribute('class');
    
    if(form.dateiart.value == ""){
      error = true;
      errorobject = form.dateiart;
    } else if(form.beschreibung.value == ""){
      error = true;
      errorobject = form.beschreibung;
    } else if(form.rechte.value == ""){
      error = true;
      errorobject = form.rechte;
    } else if(form.quelle.value == ""){
      error = true;
      errorobject = form.quelle;
    } else if(form.datum.value == ""){
      error = true;
      errorobject = form.datum;
    }

    console.log(errorobject);
    
    if(error){
      errorobject.setAttribute('class','ut-has-error');
    }

  }

  this.scan = function () { 
    document.querySelectorAll('form[data-js-validate=true]').forEach(function (form) {  
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkForm(form);
      });
    });
  }
}





function viewSwitcher() {

  let switcherButton = document.querySelector('#viewSwitcher');
  let overviewContainer = document.querySelector('#overview');
  
  this.init = function() {
    
    /* Gibt es überhaupt einen Overview Container? 
       Denn auf den Detailseiten gibt es ja keinen :) */
    if (overviewContainer !== null) {
      
      /* Interaktionselement aktivieren (sichtbar machen) */
      switcherButton.classList.add("is-active");

      /* Hier bitte den restlichen Code für den ViewSwitcher einfügen.
         Für den Switcher Button gibt es schon die CSS-Klassen
         card-view: für den Card View (default)
         list-view: für den List View

         …
         …
         …

      */
    }
  }
}





function navToNeighbours () { 

  let data = {};
  data.previous = false;
  data.next = false;

  function generateNavitem(type, data) { 
    console.log(type);
    console.log(data);

    /* Hier bitte den Code für die Navigation zwischen den Gemälden einfügen. 
    
    …
    …
    …

    */
  }

  this.init = function() { 
    data.previous = (typeof previous != 'undefined' && previous.link ) ? previous : false;
    data.next = (typeof next != 'undefined' && next.link) ? next : false;
    
    if (data.previous) { generateNavitem("previous", data.previous); }
    if (data.next) { generateNavitem("next", data.next ); }
  }

}



/* Main
============================================================================ */


document.addEventListener("DOMContentLoaded", function(event) {
  
  /* Hier die Funktionen aufrufen */

  /* Form Validator */
  let validator = new formValidator();
  validator.scan();

  /* View Switcher */
  let switcher = new viewSwitcher();
  switcher.init();

  /* Navigation zwischen den Gemälden */
  let nav = new navToNeighbours();
  nav.init();

  /* Accordion */

});

