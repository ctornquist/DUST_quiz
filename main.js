$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        $this = $(this);
        $label = $this.parent();
        // first make ALL labels normal
        $label.parent().parent().find('label').css('box-shadow', '0px 0px');
        $label.parent().parent().find('label').css('opacity', '0.5');
        // then update just the clicked one
        $label.css('box-shadow', '-3px -3px 10px black');
        $label.css('opacity', '1');
    });
});


/*from lab assignment*/
$('#submit').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    console.log(choices);

    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable
    if (choices.length < 9){
        document.getElementById("lineOne").innerText = "YOU FORGOT ONE (OR MORE) QUESTION(S)!!";
    } else {
        let person = [0, 0, 0, 0, 0, 0, 0];
        /*clip toenails */
        if (choices[0] == 1) {person[0] = person[0]+1;}
        else if (choices[0] == 2) {person[1] = person[1]+1; person[2] = person[2]+1;}
        else if (choices[0] == 3) {person[3] = person[3]+1; person[4] = person[4]+1;}
        else {person[5] = person[5]+1; person[6] = person[6]+1;}
       
        /*lower body*/
        if (choices[1] == 1) {person[1] = person[1]+1;}

        /*pb spoon */
        if (choices[2] == 1) {person[2] = person[2]+1;}
        else if (choices[2] == 3) {person[0] = person[0]+1}

        /*go to bed */
        if (choices[3] == 1) {person[6] = person[6]+1; person[1] = person[1]+1;}
        else if (choices[3] == 2) {person[3] = person[3]+1; person[2] = person[2]+1;}
        else if (choices[3] == 3) {person[0] = person[0]+1;}
        else {person[5] = person[5]+1; person[4] = person[4]+1;}

        /*ribs from foco */
        if (choices[4] == 1) {person[4] = person[4]+1;}

        /*given nickname */
        if (choices[5] == 1) {person[5] = person[5]+1; person[4] = person[4]+1;}

        /*soak dishes */
        if (choices[6] == 1) {person[6] = person[6]+1; person[5] = person[5]+1; person[4] = person[4]+1;}
        else if (choices[6] == 2) {person[0] = person[0]+1; person[2] = person[2]+1;}
        else if (choices[6] == 3) {person[1] = person[1]+1;}
        else {person[3] = person[3]+1;}

        /* red face */
        if (choices[7] == 1) {person[5] = person[5]+1;}
        else if (choices[7] == 2) {person[3] = person[3]+1; person[2] = person[2]+1; person[4] = person[4]+1;}
        else if (choices[7] == 3) {person[1] = person[1]+1; person[0] = person[0]+1;}
        else {person[6] = person[6]+1;}

        /*how sweat */
        if (choices[8] == 1) {person[1] = person[1]+1; person[0] = person[0]+1;}
        else if (choices[8] == 2) {person[3] = person[3]+1; person[6] = person[6]+1;}
        else if (choices[8] == 3) {person[4] = person[4]+1; person[5] = person[5]+1;}
        else {person[2] = person[2]+1;}
    
        console.log(person);

        let max = 0;       //finding which one appeared the most # of times
        for (let j = 0; j < person.length; j++){
            if (person[j] > person[max]){
                max = j;
                console.log(max);
            }
        }

        console.log(max);
        /*inspired from https://www.includehelp.com/code-snippets/different-ways-to-display-output-in-javascript.aspx*/
        if (max == 0){
            document.getElementById("lineOne").innerText = "MARGARET NICHOLS";
            document.getElementById("lineTwo").innerText = "you sometimes moonlight as your alter ego: margar nichol";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/marge.JPG" alt="marge" />';
        } else if (max == 1) {
            document.getElementById("lineOne").innerText = "HANNAH MARR";
            document.getElementById("lineTwo").innerText = "you probably need to move the seat up to drive someone else's car. it's cool, we've all been there.";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/hannah.jpeg" alt="hannah" />';
        } else if (max == 2) {
            document.getElementById("lineOne").innerText = "ABBY RITTERBAND";
            document.getElementById("lineTwo").innerText = "you've unfortunately never learned how to cut in a straight line. hairdresser is NOT in your future career path";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/abby.png" alt="abby" />';
        } else if (max == 3) {
            document.getElementById("lineOne").innerText = "PJ TROP";
            document.getElementById("lineTwo").innerText = "you have a lot of gold medals, but your room's a mess. ya win some ya lose some";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/claire.png" alt="claire" />';
        } else if (max == 4) {
            document.getElementById("lineOne").innerText = "NETTY GAWERC";
            document.getElementById("lineTwo").innerText = "you're the only one who knows how to pronounce 'HEB Groceries'";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/netty.JPG" alt="netty" />';
        } else if (max == 5) {
            document.getElementById("lineOne").innerText = "CROUTON";
            document.getElementById("lineTwo").innerText = "your ideal night is getting drunk on a tuesday and building a hogwarts replica out of legos";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/crouton.JPG" alt="crouton" />';
        } else if (max == 6) {
            document.getElementById("lineOne").innerText = "EMMA BUSHMAN";
            document.getElementById("lineTwo").innerText = "you have Big Stallion Energy! go you!";
            document.getElementById("photo").innerHTML = '<img id="pic" src="./pics/emma.jpeg" alt="emma" />';
        }
    }
});
