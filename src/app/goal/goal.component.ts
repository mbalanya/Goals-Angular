import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version', new Date(2020,3,14)),
    new Goal(2, 'Buy cookies', 'Cookies for the parrot', new Date(2019,6,9)),
    new Goal(3, 'Get new phone case', 'Diana has a birthday', new Date(2022,1,12)),
    new Goal(4, 'Get dog food', 'buy expensive snacks', new Date(2019,0,18)),
    new Goal(5, 'Solve math homework', 'Damn math', new Date(2019,2,14)),
    new Goal(6, 'Plot my world domination plan', 'Am an evil overlord', new Date(2030,3,14))
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
