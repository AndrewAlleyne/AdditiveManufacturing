import { ChangeDetectorRef, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { IUser } from "src/user/types/userTypes";

@Component({
  selector: "app-sensors-actuators-mangement",
  templateUrl: "./sensors-actuators-mangement.component.html",
  styleUrls: ["./sensors-actuators-mangement.component.scss"],
})
export class SensorsActuatorsMangementComponent {
  myForm: FormGroup;
  // iconsList: any = { cilUserPlus };
  tempUsers: string[] = [];
  options: string[] = ["Read", "Write", "Execute"];
  optionsLen = this.options.length - 1;
  users: any[] = [];
  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.myForm = this.formBuilder.group({
      name: [""],
      email: [""],
      roles: [""],
      mobile: [""],
      avatar: [""],
      accessPolicy: [""],
      group: [""],
    });
  }

  ngOnInit() {
    // Get the users on component load
    const usersString = window.localStorage.getItem("users");
    if (usersString) {
      this.users = JSON.parse(usersString);
    }
  }

  addUser() {
    console.log(this.options);
  }

  //Get the user object from tile being edited
  modifyUser(event: any) {
    console.log("Modify user!", event);

    // Reminds user what they are changing
    this.myForm.patchValue({
      name: event.name,
      email: event.email,
      roles: event.roles,
      mobile: event.mobile,
      accessPolicy: event.accessPolicy,
      group: event.group,
    });

    //Get the form object
  }

  onSubmit() {
    let formControlObject: any = this.myForm.value;
    console.log(formControlObject, " Form submitted. ");
    console.log(formControlObject.accessPolicy, " Form submitted. ");

    const user = {
      name: formControlObject.name,
      email: formControlObject.email,
      password: formControlObject.password,
      avatar: "",
      roles: [formControlObject.roles],
      accessPolicy: formControlObject.accessPolicy,
    };

    //Check the local storage for the users object
    let localStorage = window.localStorage.getItem("users");

    //If local storage is set the push to local array an then push to local storage.
    if (localStorage) {
      let users = JSON.parse(localStorage);
      users.unshift(user);
      this.users = users;

      window.localStorage.setItem("users", JSON.stringify(users));
    } else {
      let users = [user];
      window.localStorage.setItem("users", JSON.stringify(users));
      this.users = users;
    }
    this.clearForm();
  }

  setLocalStorage(user: any) {
    window.localStorage.setItem(
      "users",
      JSON.stringify([...this.tempUsers, user])
    );
  }
  //Resets the form after submission
  clearForm() {
    this.myForm.reset();
  }

  //Modify the data and patch it back
  onModifySubmit() {
    // Form value
    let formControlObject: any = this.myForm.value;

    // Get the user array from local storage
    let users = window.localStorage.getItem("users");

    // Retrieve the form with the unique email address.
    if (users) {
      // Parse local storage JSON
      let userList: any[] = JSON.parse(users);

      console.log(userList, " Object before modification");
      // If users is not null
      if (userList) {
        // Find the index number of the user
        let index = userList.findIndex(
          (user: IUser) => user.email === formControlObject.email
        );

        // If there is a user then replace the old user with the new user
        if (index !== -1) {
          console.log(formControlObject, " Current form value");
          userList[index] = { ...userList[index], ...this.myForm.value };

          // Assign new user list
          this.users = userList;
        }
        console.log(userList, " Object after modification");

        //Push changes to local storage
        window.localStorage.setItem("users", JSON.stringify(userList));
      }
    }
    this.clearForm();
  }

  // Sample chart data
  data = {
    datasets: [
      {
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 80, 40],
      },
    ],
  };

  chartOptions = {
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      console.log("handleChartRef", $chartRef);
      this.data.datasets[0].data.push(60);
      this.data.datasets[1].data.push(20);
      setTimeout(() => {
        $chartRef?.update();
      }, 3000);
    }
  }
}
