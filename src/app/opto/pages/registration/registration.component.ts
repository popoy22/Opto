import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

interface Division {
    label: string;
    code: string;
}

interface Application {
    label: string;
    code: string;
}

interface Team {
    label: string;
    code: string;
}

interface Notification {
    label: string;
    code: string;
}

interface Country {
    label: string;
    code: string;
}

@Component({
    selector: "app-registration",
    templateUrl: "./registration.component.html",
    styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
    step: any = 0;

    selectedDivision;
    selectedApplication;
    selectedTeam;
    selectedNotifications: Notification[] = [];
    selectedCountry;

    items: MenuItem[];
    divisions: Division[];
    applications: Application[];
    teams: Team[];
    countries: Country[];
    notifications: any[];

    constructor() {}

    ngOnInit(): void {
        this.items = [
            { label: "Generic" },
            { label: "Build" },
            { label: "SIT Deployment" },
            { label: "Aldon Checkin" },
            { label: "TOSCA Pipeline" },
            { label: "Vera Code Checkin" },
            { label: "Hash Report Pipeline" },
            { label: "Review & Generate" },
        ];

        this.divisions = [
            { label: "-- Choose Division Custodian --", code: null },
            { label: "Division 1", code: "Division 1" },
            { label: "Division 2", code: "Division 2" },
            { label: "Division 3", code: "Division 3" },
            { label: "Division 4", code: "Division 4" },
            { label: "Division 5", code: "Division 5" },
        ];

        this.teams = [
            { label: "-- Choose Application Team --", code: null },
            { label: "Team 1", code: "Team 1" },
            { label: "Team 2", code: "Team 2" },
            { label: "Team 3", code: "Team 3" },
            { label: "Team 4", code: "Team 4" },
            { label: "Team 5", code: "Team 5" },
        ];

        this.applications = [
            { label: "-- Choose Application --", code: null },
            { label: "Application 1", code: "Application 1" },
            { label: "Application 2", code: "Application 2" },
            { label: "Application 3", code: "Application 3" },
            { label: "Application 4", code: "Application 4" },
            { label: "Application 5", code: "Application 5" },
        ];

        this.notifications = [
            { name: "Build Status", code: "Build Status" },
            { name: "Sit Deployment", code: "Sit Deployment" },
            { name: "Sonar Scan", code: "Sonar Scan" },
            { name: "Xray Scan", code: "Xray Scan" },
            { name: "HashReport", code: "HashReport" },
        ];
        this.countries = [
            { label: "-- Choose Country --", code: null },
            { label: "Singapore", code: "Singapore" },
            { label: "Japan", code: "Japan" },
            { label: "India", code: "India" },
            { label: "Malaysia", code: "Malaysia" },
        ];
    }

    nextPage() {
        this.step += 1;
    }
}
