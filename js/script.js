// js
wow = new WOW(
{
boxClass:     'wow',      
animateClass: 'animated', 
offset:       0,          
mobile:       true,       
live:         true        
}
)
wow.init();

// jquery
$(document).ready(function(){
$( "#draggable" ).draggable()
 $( "#accordion" ).accordion({
      collapsible: true
    });

    let data = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#c_name" ).autocomplete({
      source: data
    });
   $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});