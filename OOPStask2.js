class UberPriceCalculation{
    constructor(Name,PickupArea,DropArea,DistanceInKM,SelectCAR){
        this.Name=Name;
        this.PickupArea=PickupArea;
        this.DropArea=DropArea;
        this.DistanceInKM=DistanceInKM;
        this.SelectCAR=SelectCAR;
    }
    PriceCalculation(){
        console.log(`Hi ${this.Name},your Distance  is below 5KM means your fare will be normal, After 5 KM your fare amount increased by 3RS `)
        if(this.DistanceInKM<5){
            this.SelectCAR==="BIKE"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${this.DistanceInKM*9}.00 `):
            this.SelectCAR==="AUTO"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${this.DistanceInKM*15}.00`):
            this.SelectCAR==="UBER COMFORT"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${this.DistanceInKM*18}.00`):
            this.SelectCAR==="UBERXL"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${this.DistanceInKM*25}.00`):"Please Select correct vechile to travel";
        }else{
            this.SelectCAR==="BIKE"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${(5*9)+((this.DistanceInKM-5)*12)}.00`):
            this.SelectCAR==="AUTO"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${(5*9)+((this.DistanceInKM-5)*18)}.00`):
            this.SelectCAR==="UBER COMFORT"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${(5*9)+((this.DistanceInKM-5)*21)}.00`):
            this.SelectCAR==="UBERXL"?console.log(`Hi ${this.Name}, You Booked your journey from ${this.PickupArea} to ${this.DropArea} and Your fare is RS ${(5*9)+((this.DistanceInKM-5)*24)}.00`):"Please Select correct vechile to travel";

        }
        console.log("Thank's for used Uber service");
        console.log("Get a ride when you need one");
    }
}
console.log("Welcome to Uber Service");
let Name=  prompt("Enter your Name").toUpperCase();
let PickupArea= prompt("Enter your location area name").toUpperCase();
let DropArea= prompt("Enter your Drop location place name").toUpperCase();
let DistanceInKM=Number(prompt("Enter your travelling DistanceInKM"));
let SelectCAR= prompt("Select Vechile from [ Bike, Auto, Uber Comfort, UberXL").toUpperCase();
let Obj=new UberPriceCalculation(Name,PickupArea,DropArea,DistanceInKM,SelectCAR);
Obj.PriceCalculation();