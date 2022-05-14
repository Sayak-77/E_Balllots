var checked = 0;

function voteMade(a){

  if (a == 'BJP')
  {
    if(valid())
    {
      if (confirm("You want to vote for Bhartiya Janta Party ?"))
      {
        checked = 1;
        alert("You just casted a vote for Bhartiya Janta Party.THANK YOU FOR VOTING.!!");
      }
    }
    else
    {
      alert("You have already casted a vote")
    }
  }
  else if (a == 'CON')
  {
    if (valid())
    {
      if (confirm("You want to vote for Congress Party ?"))
      {
        checked = 1;
        alert("You just casted a vote for Congress Party. THANK YOU FOR VOTING.!!");
      }
    }
    else
    {
      alert("You have already casted a vote")
    }
  }

  else if (a == 'AAP')
  {
    if(valid()){
    if (confirm("You want to vote for Aam Aadmi Party ?"))
    {
      checked = 1;
      alert("You just casted a vote for Aam Aadmi Party. THANK YOU FOR VOTING.!!");
    }
  }
  else
  {
    alert("You have already casted a vote")
  }
  }

  else if (a == 'SAM')
  {
    if(valid()){
    if (confirm("You want to vote for Samajwadi Party ?"))
    {
      checked=1;
      alert("You just casted a vote for Samajwadi Party. THANK YOU FOR VOTING..!!");
    }
  }
  else
  {
    alert("You have already casted a vote")
  }
  }
  
  else if (a == 'BSP')
  {
    if(valid()){
    if (confirm("You want to vote for Bahujan Samaj Party ?"))
    {
      checked = 1;
      alert("You just casted a vote for Bahujan Samaj Party. THANK YOU FOR VOTING..!!");
    }
  }
  else
  {
    alert("You have already casted a vote")
  }
}

else if (a == 'JDU')
  {
    if (confirm("You want to vote for Janta Dal United ?"))
    {
      checked  = 1;
      alert("You just casted a vote for Janta Dal United. THANK YOU FOR VOTING..!!");
    }
   else
  {
    alert("You have already casted a vote")
  }
  }

  else
  {
    if (confirm("You dont want to vote for any of the parties in the ongoing elections ?"))
    {
      alert("No vote was casted. THANK YOU FOR PARTICIPATING..!!");
    }
  }
}

function valid()
{
  if(checked)
  {
    return 0;
  }
  else
  {
    return 1;
  }
}
