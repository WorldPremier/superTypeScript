import { Coach } from "./Coach";

export class FootballCoach implements Coach {
  getDailyWorkout(): string {
    return `Kicker kicks the ball 50 times over the goal line`;
  }
}
