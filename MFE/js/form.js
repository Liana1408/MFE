function gotowhatsapp() {
    var name = document.getElementById("volunteer-name").value;
    var email = document.getElementById("volunteer-email").value;
    var subject = document.getElementById("volunteer-subject").value;
    var message = document.getElementById("volunteer-message").value;

    var url = "https://wa.me/265992403398?text=" +
        "Hello Mwayi foundation for the eldery, " + "%0a%0a" +
        "I am  " + name + "%0a %0a" +
        "email: " + email + "%0a %0a" +
        "subject:  " + subject + "%0a %0a" +
        "here is my message: " + message;

    window.open(url, '_blank').focus();

}

function gotowhatsapp2() {
    var email = document.getElementById("subscribe-email").value;


    var url = "https://wa.me/265992403398?text=" +
        "Hello Mwayi foundation for the eldery, i am subcribing so i can be able to get recent news my email is  " + "%0a %0a" +
        "Email: " + email;

    window.open(url, '_blank').focus();

}

function gotowhatsapp3() {
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/265992403398?text=" +
        "Hello Mwayi foundation for the eldery, " + "%0a%0a" +
        "I am  " + firstname + "%0a %0a" +
        "email: " + lastname + "%0a %0a" +
        "subject:  " + email + "%0a %0a" +
        "here is my message: " + message;

    window.open(url, '_blank').focus();

}


function gotowhatsapp4() {
    var DonationFrequency = document.getElementById("DonationFrequencyOne").value;
    var DonationFrequency = document.getElementById("DonationFrequencyMonthly").value;
    var flexRadioDefault = document.getElementById("flexRadioDefault1").value;
    var flexRadioDefault = document.getElementById("flexRadioDefaul2").value;
    var flexRadioDefault = document.getElementById("flexRadioDefault3").value;
    var flexRadioDefault = document.getElementById("flexRadioDefault4").value;
    var flexRadioDefault = document.getElementById("flexRadioDefault5").value;
    var flexRadioDefault = document.getElementById("flexRadioDefault6").value;
    var basicAddOn = document.getElementById("basic-addon1").value;
    var name = document.getElementById("donation-name").value;
    var email = document.getElementById("donation-email").value;
    var DonationPayment = document.getElementById("flexRadioDefault9").value;
    var DonationPayment = document.getElementById("flexRadioDefault10").value;

    var url = "https://wa.me/265883031860?text=" +
        "Hello Mwayi foundation for the eldery, i would like to make a donation" + "%0a" +
        "Donation frequency of  " + DonationFrequency + "%0a %0a" +
        "Donation frequency of  " + DonationFrequency + "%0a %0a" +
        "Amount:   " + flexRadioDefault + "%0a %0a" +
        "basic add on:  " + basicAddOn + "%0a %0a" +
        "Personal details  " + "%0a %0a" +
        "Name:   " + name + "%0a %0a" +
        "email: " + email + "%0a %0a" +
        "mode of payment: " + DonationPayment;
    window.open(url, '_blank').focus();

}