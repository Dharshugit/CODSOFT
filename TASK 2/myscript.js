function myfunction()
{
  var dots=document.getElementById("dots");
  var moretext=document.getElementById("more");
  var btn=document.getElementById("mybtn");
  if(dots.style.display==="none")
  {
    dots.style.display="inline";
    btn.innerHTML="Know More";
    moretext.style.display="none";
  }
  else
  {
    dots.style.display="none";
    btn.innerHTML="Read Less";
    moretext.style.display="inline";
  }
}