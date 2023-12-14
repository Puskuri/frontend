export class Liput {

    hinta: any;
    kappale: any;
    kuka1: string;
    kuka2: string;
    kuka3: string;

    constructor(value: string) {
        this.kappale = value;
        this.kuka1 = "peruslippu";
        this.kuka2 = "opiskelija"
        this.kuka3 = "eläkeläinen"
    }
    vastaus(value: number) {
        console.log(this.kappale + " " + value)

        if (value == 0) {
            this.kappale = "1";
        }
        else if (value == 1) {
            this.kappale = "2";
        }
        else if (value == 2) {
            this.kappale = "4";
        }
        else if (value == 3) {
            this.kappale = "5";
        }
    }

    Yht(): any {
        if (this.kuka1 + 16 * this.kappale) {
            this.hinta = this.hinta;
        }
        if (this.kuka2 + 10 * this.kappale) {
            this.hinta = this.hinta;
        }
        if (this.kuka3 + 8 * this.kappale) {
            this.hinta = this.hinta;
        }
    }

    //KOKEILUA
    tulos = "";
    result = "";
    value = "";

    addValue(value: any) {

        if (value == 'peruslippu') {
            return this.Yht();
            //this.tulos = this.tulos + 16 * this.kappale;
            //return this.Yht();
        }

        if (value == 'opiskelija') {
            return this.Yht();
            //this.tulos = this.tulos + 10 * this.kappale;
        }

        if (value == 'eläkeläinen') {
            return this.Yht();
            //this.tulos = this.tulos + 8 * this.kappale;
        }
    }

}
