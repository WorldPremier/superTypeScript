import { FootballCoach } from "./FootballCoach";
import { SoccerCoach } from "./SoccerCoach";
import { Coach } from "./Coach";

let mySoccerCoach = new SoccerCoach();
// console.log(mySoccerCoach.getDailyWorkout());

let myFootballCoach = new FootballCoach();
// console.log(myFootballCoach.getDailyWorkout());

let theCoaches: Coach[] = [];

//adding coaches to array
theCoaches.push(myFootballCoach);
theCoaches.push(mySoccerCoach);

for (let numOfCoaches of theCoaches) {
  console.log(numOfCoaches.getDailyWorkout());
}
