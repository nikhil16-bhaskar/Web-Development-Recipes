function Insert()
{
  
  const fetch=document.getElementsByTagName("input")
  const s_name=fetch[0].value
  const s_rollno=fetch[1].value
  const s_section=fetch[2].value
  if(s_name=='' || s_rollno=='' || s_section=='')
  {
    alert(`All particulars are not filled !!`)
  } 
  else{
  const trow=document.createElement("tr")
  const butn=document.createElement("input")
  butn.setAttribute('type','checkbox')
  const td_1=document.createElement("td")
  const td_2=document.createElement("td")
  const td_3=document.createElement("td")
  
  trow.appendChild(butn)
  trow.appendChild(td_1)
  trow.appendChild(td_2)
  trow.appendChild(td_3)
  
  td_1.innerHTML= s_name
  td_2.innerHTML=s_rollno
  td_3.innerHTML=s_section
  
  trow.align="center"
  butn.align="center"
  td_1.align="center" 
  td_2.align="center"
  td_3.align="center"
             
 const tabl=document.getElementById('tab')
  tabl.appendChild(trow)            
}
}
function Delete()
{
  const checkbox_selected =  $("#tab input:checkbox:checked").length
  const no_checkboxes=$("#tab input:checkbox").length
  if(checkbox_selected>0)
  alert(`You have selected ${checkbox_selected}th record to be deleted !!`);
  $("#tab input:checkbox:checked").closest('tr').remove();
  if(no_checkboxes==-1)
  {
    alert(`Checkbox not selected !!`);
  }
  if(checkbox_selected==0)
  {
    alert(`No record(s) can be deleted due to one or both of the reasons!!
          1. There are no records.
          2. checkboxes not selected`);
  }

}

function Edit()
{
 
let checkbox_length =  $("#tab input:checkbox").length

let indexer = $("#tab input:checkbox:checked").closest('tr').index()
   
   if(indexer!=-1){
    alert(`you have selected ${indexer}th record to be edited`);
  $("#tab input:checkbox:checked").closest('tr').replaceWith(Edited_details(indexer));
   }
   if(indexer==-1)
   {
     alert(`Checkbox not selected!!`)
   }

 
}

function Edited_details(indexer)
{
  const fetch=document.getElementsByTagName("input")
  const s_name=fetch[0].value
  const s_rollno=fetch[1].value
  const s_section=fetch[2].value
  if(s_name=='' || s_rollno=='' || s_section=='')
  {
    alert(`All particulars are not filled !!`)
  } 
  else{
  const trow=document.createElement("tr")
  const butn=document.createElement("input")
  butn.setAttribute('type','checkbox')
  const td_1=document.createElement("td")
  const td_2=document.createElement("td")
  const td_3=document.createElement("td")
  
  trow.appendChild(butn)
  trow.appendChild(td_1)
  trow.appendChild(td_2)
  trow.appendChild(td_3)
   
  td_1.innerHTML= s_name
  td_2.innerHTML=s_rollno
  td_3.innerHTML=s_section
  trow.align="center"
  butn.align="center"
  td_1.align="center" 
  td_2.align="center"
  td_3.align="center"
  
  const tab1=document.getElementById('tab')
  tab1.insertBefore(trow,tab1.childNodes[indexer+1])
}
}
