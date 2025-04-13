async function getData(selected_major) {
    var response = await fetch('cit5students.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        cit5students = data.filter( (cit5students) => cit5students.major == selected_major );  

       var templateText = document.getElementById('cit5studentsTemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: cit5students })      // apply data to template
       document.getElementById('cit5studentsTable').innerHTML = compiledHtml; 
    }
    else {
       document.querySelector('#cit5studentsTable').innerHTML = "There was an error, or menu items not found";
    }	
 
}
