export class Topic {

    header: string;
    answer: string;

    constructor(value: string) {
        this.header = value;
        this.answer = "Ei vielä arvosteltu";

    }
    vastaus(value: number) {
        console.log(this.header + " " + value)

        if (value == 0) {
            this.answer = "Ei vielä arvosteltu";
        }
        else if (value == 1) {
            this.answer = "Välttävä";

        }
        else if (value == 2) {
            this.answer = "Ok";
        }
        else if (value == 3) {
            this.answer = "Erinomainen";
        }
    }

}
