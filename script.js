

// pass match func

var check = function(){

    if (document.getElementById('password').value==
    document.getElementById('confirmPassword').value) {
        document.getElementById('cMessage').style.color = 'transparent'
        document.getElementById('cMessage').innerHTML = 'match'
    
    }
    else{
        document.getElementById('cMessage').style.color = 'red'
        document.getElementById('cMessage').innerHTML = 'password does not match'
    }


}

// phone format func

function phoneFormat(input) {//returns (###) ###-####
    input = input.replace(/\D/g,'');
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
    if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
    return input;
}

// light mode

