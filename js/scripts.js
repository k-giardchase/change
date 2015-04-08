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
        return coins;
    }
    return coins;
}
