function changemaker (price, amount_paid) {
    var change = price - amount_paid;
    var coins = [];
    var remainder = 0;

    while (change > 0) {
        if(change >= 25) {
            var total = Math.floor(change/25);
            coins[0] = total;
            remainder = change % 25;
            change = remainder;
        } else {
            coins[0] = 0;
        }

        if (change >= 10) {
            var total = Math.floor(change/10);
            coins[1] = total;
            remainder = change % 10;
            change = remainder;
        } else {
            coins[1] = 0;
        }

        if (change >= 5) {
            var total = Math.floor(change/5);
            coins[2] = total;
            remainder = change % 5;
            change = remainder;
        } else {
            coins[2] = 0;
        }

        if (change >= 1) {
            var total = Math.floor(change/1);
            coins[3] = total;
            remainder = change % 1;
            change = remainder;
        } else {
            coins[3] = 0;
        }

    }

    if (price === amount_paid) {
        coins[0] = 0;
        coins[1] = 0;
        coins[2] = 0;
        coins[3] = 0;
    }
    return coins;
}


$(document).ready(function() {

    $('#changemaker').submit(function(event) {

            var price = parseInt($('input#price').val());
            var amount_paid = parseInt($('input#amount_paid').val());

            var result = changemaker(price, amount_paid);

            // $('.quarters').empty();

            $('.quarters').text(result[0]);
            $('.dimes').text(result[1]);
            $('.nickels').text(result[2]);
            $('.pennies').text(result[3]);

            $("#result").show();
            event.preventDefault();

    });

});
