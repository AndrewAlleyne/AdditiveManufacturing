# TODO

- [x] Separation of concern. User credentials, Roles, Access Policy should all be separate.
- [x] User form Validation
- [x] Depending on user ROLE(ADMIN, FINANCE, ETC...) show basic menu. MASTER user has everything
- [x] Filter by permissions based on which group the particular user belongs to
- [x] Real time notifications
- [x] Account window
- [x] Weather widget
- [ ] Build Backend API
- [ ] Personal graph selection
- [ ] Gather data on sensor information
- [ ] Find/Develop sorted table
- [ ] No View linked to Customer database, we just want to make the data available to them
- [ ] Operations and COntrol is the base menu for every role. The submenu will be based on user access menu.

Operations and Control ( ENGINEERING )
_ Routing
_ Job Management
Scheduling
Service History Tracking
Technician Management
Repair Tracking

    -[ ] Move uncommon items to the RIGHT ( SETTTINGS and its submenus)

# DONE

- [x] Make login route
- [x] Handle fake authentication
- [x] Add roles to users
- [x] Menus based on user role
- [x] Display data related to each user page
- [x] Show Nav Menu based on user role
- [x] Routing of all components
- [x] Responsive Pie Diagrams
- [x] Reusuable Table Component

Bugs encounted:

- [x] VScode changes TS version if you allow it to automatically update file paths. It uses it's own version of ts to judge configurations (FIXED)
- [x] Module dependency hell

# Same menu designs

Sensors & Actuators Mangement
Machines Management
Tools & Jigs Management
Asset Management

#PAGE

Failure Analysis
ADMIN - Fixed assets
Preventive vs Predicted Analysis
Financial Analysis
Automatic Diagnosis Analysis
Root Cause Analysis ( RCA )

- [ ] How to map

# PIE Charts (FIXED DATA

Compare contrast actual vs predicted.

# Every user has a role in the application.

# Every role

#DEB NOTES

Notification and Alarms connected to database Both are fed by the predictive and preventive.
We are to show numerical numbers where a new number appears and user can download in excel format the alarms

---

## Preventive (RADIO BUTTONS)Predective (RADIO BUTTONS) Both (RADIO BUTTONS)

Options panel on the right side to
add information to the graph
Detail as Option 1, Option 2

---

Table detail as

Parameter 1, Parameter 2, Parameter 3

Functions need to be implemented.

- [ ] Search graphs function
- [ ] Filter graph view
- [ ] Decide on what Options to be placed in menu
- [ ] What information should the table contain
- [ ] Build/Find ascending/descending table

## Refactor

- [ ] Make components resusable

- [ ] User wants to login into different accounts so that they can see different views based on what they're interested in.
  - [ ] d
- [ ] Animations for plots

-- Anoop discussion
Generate 2 screens
Dashboard
Asset Model Information

---

-On refresh or revisit a new Server instance is started for that user. We need to devise a way to continue the server stream while also storing the previous data.

Data flow for real time messages.

New data --> Persistence storage --> Data Retrieval (You dont want to load all the data but just some within a range ) --> Client Request(Triggered based on time series) --> Hafnle Client request server side. (Applies Data Retrieval Methodology)
