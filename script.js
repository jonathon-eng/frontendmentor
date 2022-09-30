// updates card in realtime


function cardFunc() {
    var x = document.getElementById("CardNumber").value;
    let spaced = x.match(/.{1,4}/g);
    let newX = spaced.join(' ');
    document.getElementById("number").innerHTML = newX;
}


function mFunc() {
    var x = document.getElementById("CardMonth").value;
    document.getElementById("month").innerHTML = x;
}
function yFunc() {
    var x = document.getElementById("CardYear").value;
    document.getElementById("year").innerHTML = x;
}
function nameFunc() {
    var x = document.getElementById("CardholderName").value;
    document.getElementById("name").innerHTML = x;
}
function cvcFunc() {
    var x = document.getElementById("CardCVC").value;
    document.getElementById("CVC").innerHTML = x;
}


// checksum if input data is incorrect

function validateNumber() {
      var VNumber = document.getElementById("CardNumber").value; 
      if (/^[A-Z]\D{2,30}$/.test(VNumber) == false)
      {
          document.getElementById("checksum").style.display = "none";
          return false;
      {
    
  }
      }
  }




  function complete() {

    comButton.addEventListener("click", () => {
        var completion = document.getElementsByClassName("complete");
        completion.style.display= "block";
        event.preventDefault();

    }
    )
    };
    

    var comButton = document.getElementById("wh");
    comButton.addEventListener('submit', complete);
