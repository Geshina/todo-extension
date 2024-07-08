# Angular Google Tasks Extension

graphic interface to replace the plain home tab with the to-do from your google tasks

[Github Repo](https://github.com/Geshina/todo-extension)

## To-do

- [x] Architecture
- [ ] update readme
- [ ] get on with commits
- [ ] UI | material | existing components
- [ ] AUTH
- [ ] Local storage
- [ ] Google tasks API

## Serivces

- Auth - used to authenticated the user and provide a secure access to the users tasks
- localStorage - to caches data and serves as backup for offline
- googleTasks - to store all tasks on the cloud
- sync - data integrity between local and cloud

## Components

App

- acts as container for tasksLists and nav
- stores metadata and state
- enables add-ons (WIP)

tasksList

- contains a grouping of tasks and their metadata
- drag and drop functionality (TBD)

Task

- states
- can be nested
- can be modified

```
|app
|
|-task
| |-task
| |-task
```
