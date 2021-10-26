function displayNav() {
    let x = document.getElementById('hidden');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };


  function closeButton(){
  document.getElementById('hidden').style.display= "none";
}

