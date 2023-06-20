// value aanu change aakunnath
function buttonClick(val) {
  console.log(val);
  //if we give like this .nammal kodtha value over right aakaan cheyyaa
  //namukk 2 digit number type cheyaan patoola.
  //document.getElementById("screen").value = val;

  //so in order to solve this issue,namukk already enthenkilum text fieldil undo undenkil aa value koode add aakanm
  //for that nammal value koode add aaakanm
  // document.getElementById("screen").value =  document.getElementById("screen").value+ val;
  //same above code in diff way
  document.getElementById("screen").value += val;
}

function clearData() {
  document.getElementById("screen").value = "";
}

function equalClick() {
  try {
    //nammale text fieldile data edukaaan vendi
    var textData = document.getElementById("screen").value;

    //eval() is a method.ee method vilikumpo text field ulla content okke operation aayit maaritt namukk result therum
    //ee eval() use aakumpo automatic aayit opertion calculator work cheyumpo cheyyum ennit result enna variabilil store aakum
    var result = eval(textData);

    //ee kitya result namukk screenil show cheyyan
    document.getElementById("screen").value = result;
  } catch {
    alert("invalid number");
  }
}

// function del() {
//   // already display cheythittulla valuesil ninnu last index value remove cheyyan slice method use cheyyunnu
//   //   screen.value = screen.value.slice(0, -1);
//   console.log("hello");
//   var outputscreen = document.getElementById("screen").value;
//   outputscreen.value = outputscreen.value.slice(0, -1);
// }
