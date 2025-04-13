async function getData(major) {
    var response = await fetch('cit5students.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        major_students = data.filter( (student) => student.Major == major );  

       var templateText = document.getElementById('citStudents').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: major_students })      // apply data to template
       document.getElementById('citStudents').innerHTML = compiledHtml; 
    }
    else {
       document.querySelector('#citStudents').innerHTML = "There was an error, or menu items not found";
    }	
 
}
