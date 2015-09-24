var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1KALWqkZY80NDF0C2BwxIg0rW83IHb4RB4feGxHRpqXc/pubhtml';

function init() {
   Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true,
      orderby: 'functionname'
   })
};
init();

function container(function_name) {
  var item = '<article class="function_item">
                <h3>' + function_name + '</h3>
              </article>';

  $(elements.container).append(item);
};

function showInfo(data) {
  console.log(data);

  for (i = 0; i < data.length; i++) { 
    container(data[i].functionname);
  };
};