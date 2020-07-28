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

    console.log(choices.length)
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
    
        let max = -1;       //finding which one appeared the most # of times
        for (let j = 0; j < person.length; j++){
            if (person[j] > max){
                max = j;
            }
        }

        /*inspired from https://www.includehelp.com/code-snippets/different-ways-to-display-output-in-javascript.aspx*/
        if (max == 0){
            document.getElementById("lineOne").innerText = "marge nichols";
            document.getElementById("lineTwo").innerText = "something funny here + maybe photo";
        } else if (max == 1) {
            document.getElementById("lineOne").innerText = "hannah marr";
            document.getElementById("lineTwo").innerText = "something funny here+ maybe photo";
        } else if (max == 2) {
            document.getElementById("lineOne").innerText = "abby ritterband";
            document.getElementById("lineTwo").innerText = "something funny here+ maybe photo";
        } else if (max == 3) {
            document.getElementById("lineOne").innerText = "PJ Trop";
            document.getElementById("lineTwo").innerText = "something funny here+ maybe photo";
        } else if (max == 4) {
            document.getElementById("lineOne").innerText = "Annet Garwac";
            document.getElementById("lineTwo").innerText = "something funny here+ maybe photo";
        } else if (max == 5) {
            document.getElementById("lineOne").innerText = "Crouton";
            document.getElementById("lineTwo").innerText = "something funny here+ maybe photo";
        } else if (max == 6) {
            document.getElementById("lineOne").innerText = "Emma Bushman";
            document.getElementById("lineTwo").innerText = "something funny here+ maybe photo";
        }
    }
});
