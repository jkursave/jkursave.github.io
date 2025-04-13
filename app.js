async function getData(selected_major) {
    var response = await fetch('cit5students.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        major_students = data.filter( (student) => student.major == selected_major );  

       var templateText = document.getElementById('cit5students').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: major_students })      // apply data to template
       document.getElementById('cit5students').innerHTML = compiledHtml; 
    }
    else {
       document.querySelector('#cit5students').innerHTML = "There was an error, or menu items not found";
    }	
 
}
