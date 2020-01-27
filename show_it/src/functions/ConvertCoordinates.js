module.exports = {
    CelestialToCartesianConverter: (current) => {
        let hours, minutes, seconds, temp;
        hours = parseInt(current.ra);
        temp = (current.ra - hours) * 60;
        minutes = parseInt(temp);
        temp -= minutes;
        temp *= 60;
        seconds = parseInt(temp);

        let a = (hours * 15) + (minutes * 0.25) + (seconds * 0.004166);
        let b = current.de; //current.de
        let c = current.dist;//current.dist
        let x, y;
        /*
        X = (C * cos(B)) * cos(A)
        Y = (C * cos(B)) * sin(A)
        Z = C * sin(B)
        */
        x = (c * Math.cos(b)) * Math.cos(a);
        y = (c * Math.cos(b)) * Math.sin(a);

        return {
            X: x,
            Y: y
        };
    }
}
;