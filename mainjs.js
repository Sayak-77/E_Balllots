var checked = 0;

function voteMade(a){

  if (a == 'BJP')
  {
    if(valid())
    {
      if (confirm("You want to vote for Bhartiya Janta Party ?"))
      {
        checked = 1;
        alert("You just casted a vote for Bhartiya Janta Party");
        alert("THANKYOU FOR VOTING");
      }
      else
      {
        alert("You have already casted a vote");
      }
    }

  }
  else if (a == 'CON')
  {
    if (valid())
    {
      if (confirm("You want to vote for Congress Party ?"))
      {
        alert("You just casted a vote for Congress Party");
        alert("THANKYOU FOR VOTING");
      }
      else{
        alert("You have already casted a vote");
      }
    }
    else
    {
      alert("You have already casted a vote")
    }
  }

  else if (a == 'AAP')
  {
    if (confirm("You want to vote for Aam Aadmi Party ?"))
    {
      alert("You just casted a vote for Aam Aadmi Party ");
      alert("THANKYOU FOR VOTING");
    }
  }
  else if (a == 'SAM')
  {
    if (confirm("You want to vote for Samajwadi Party ?"))
    {
      alert("You just casted a vote for Samajwadi Party");
      alert("THANKYOU FOR VOTING");
    }
  }
  else if (a == 'BSP')
  {
    if (confirm("You want to vote for Bahujan Samaj Party ?"))
    {
      alert("You just casted a vote for Bahujan Samaj Party");
      alert("THANKYOU FOR VOTING");
    }
  }
  else if (a == 'JDU')
  {
    if (confirm("You want to vote for Janta Dal United ?"))
    {
      alert("You just casted a vote for Janta Dal United");
      alert("THANKYOU FOR VOTING");
    }
  }
  else
  {
    if (confirm("You dont want to vote for any of the parties in the ongoing elections ?"))
    {
      alert("No vote was casted");
      alert("THANKYOU FOR VOTING");
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
