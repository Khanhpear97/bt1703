class SwitchButton {
    status;
    lamp;
    constructor() {
        this.status = true;
    }
    switchButton () {
        for (let i = 0; i < 10; i++) {
            this.switchOff();
            this.switchOn();
        }
    }
    connectToLamp (ElectricLamp) {
        this.lamp = ElectricLamp;
    }
    switchOff () {
        this.status = false;
        this.lamp.turnOff();
    }
    switchOn () {
        this.status = true;
        this.lamp.turnOn();
    }
}