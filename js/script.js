let what_name = prompt("What is your name ?").trim().toUpperCase();

let name = 'DALER';
let money = 10000;
let account = 7777;

if (what_name === name) {
    let account = prompt("State your account number !").trim();

    if (account === "7777") {
        let how_money = prompt("How much money do you want to withdraw?")

        if (money >= how_money) {
            alert(everything_fine = "Everything is fine :)");

            console.log("Name: " + name);
            console.log("Password: " + "****");

            let hours_time = new Date().getHours();
            let minut_time = new Date().getMinutes();
            let second_time = new Date().getSeconds();
            let day_time = new Date().getDate();
            let month_time = new Date().getMonth();
            let year_time = new Date().getFullYear();
            console.log("Time: " + hours_time + "." + minut_time + "." + second_time +
                "  /   " + day_time + "." + month_time + "." + year_time);


            console.log("Withdrawn money: " + how_money);

            let withdrawn_money = money - how_money;
            console.log("Account balance: " + withdrawn_money);

        } else { alert("Insufficient funds !") };

    } else {
        alert('User is not found  :(')
    };


} else {
    alert('User is not found  :(')
};
