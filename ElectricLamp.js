class ElectricLamp {
    status;
    constructor() {
        this.status = true;
    }
    turnOff () {
        this.status = false;
        document.write("Đèn đã tắt <br>");
    }
    turnOn () {
        this.status = true;
        document.write("Đèn đã bật <br>");
    }
}