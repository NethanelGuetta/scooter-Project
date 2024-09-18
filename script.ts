interface Scooter {
    serialNumber: string;
    model: string;
    batteryLevel: number;
    imageUrl: string;
    color: string;
    status: 'available' | 'inRepair' | 'unavailable';
}