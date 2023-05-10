let time = '12:45:00PM';

let separateByTwoDots = time.split(":");

// Separa o numero da string.
const [, seconds, AMPM] = separateByTwoDots[2].match(/(\d+)([A-Z]+)/i);

let removeLastItem = separateByTwoDots.splice(-1,1, seconds);

let convertedTime = separateByTwoDots;

let hour = Number(convertedTime[0]);

function timeAMPMOrMilitary() {
    // Se o valor for 'PM'
    if (AMPM === 'PM') {
        // Se for igual a 12 retorne a hora
        if (hour === 12) {
            return hour.toString();
        // Se não adicione 12 a hora
        } else {
            hour += 12;
            return hour.toString();
        }
    // Se for 'AM'
    } else {
        // Se for menor que 10 adicione 0 á frente do numero '01'
        if (hour < 10) {
            return `0${hour}`;
        // Se não
        } else {
            // Se for diferente de 12 retorne a hora
            if (hour !== 12) {
                return hour.toString();
            // Se não hora será '00'
            } else {
                hour = '00';
                return hour.toString();
            }
        }
    }
}

hour = timeAMPMOrMilitary();

convertedTime.splice(0,1,hour);

let militaryTime = convertedTime.join(":");


console.log(militaryTime);