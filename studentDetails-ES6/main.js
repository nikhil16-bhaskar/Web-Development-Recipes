var addUser =false;
var deleteUser = false;
var updateUser = false;
var searchUser= false;
var editUser=false;

function search()
{
   addUser = false;
   deleteUser = false;
   updateUser = false;
   searchUser=true;
  editUser=false;
}
function hide()
{
  addUser = false;
  deleteUser = true;
   updateUser = false;
   searchUser=false;
   editUser=false;
   // $('td:nth-child(4)').hide();
   // $('td:nth-child(3)').hide();
}
function insert()
{
    addUser = true;
    deleteUser = false;
    updateUser = false;
    searchUser=false;
    editUser=false;
}
function edit()
{
  addUser = false;
  deleteUser = false;
  updateUser = false;
  searchUser=false;
  editUser=true;
}
 function submitUserAction() {
    if(addUser)
     {
        const row=document.createElement('tr');
          let col1=document.createElement('td');
          let col2=document.createElement('td');
          let col3=document.createElement('td');
           const button1 = document.createElement('input');
          button1.setAttribute('type', 'checkbox');
             row.appendChild(button1);
             row.appendChild(col1);
             row.appendChild(col2);
             row.appendChild(col3); 
             col1.innerHTML=document.getElementById('name').value;
             col2.innerHTML=document.getElementById('roll').value;
             col3.innerHTML=document.getElementById('year').value;
             const table=document.getElementById("tableid");
             table.appendChild(row);
        
    }
    if(deleteUser)
    {
        $("#tableid input:checkbox:checked").closest('tr').remove();
    }
    if(searchUser)
    {
      var search_value=docuemnt.getElementById('myInput').value;
      var the=document.getElementById('tableid');
      var currentTD = $(the).parents('tr').find('td');
      if(currentID==search_value)
      {
              style.display='none';
      }   
      else
      {
        style.display='block';
      }
    }
    if(editUser)
    {
      $(".chb").change(function()
      {
          $(".chb").prop('checked',false);
          $(this).prop('checked',true);
      });
    }
 }