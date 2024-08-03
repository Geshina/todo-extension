# Google Tasks Extension

A Chrome extension that replaces the default homepage with a todo app built using Angular Material and integrated with Google Tasks through their API.

## Table of Contents

- [To-do](#to-do)
- [Overview](#overview)
- [Services](#services)
- [Components](#components)

## To-do

- [x] Update documentation
- [x] Push changes
- [ ] Reorganize folder structure
- [ ] Make Components
- [ ] Connect with API
- [ ] Modify components to be reactive with local data
- [ ] Remove padding on completed tasks

## Overview

NgRx is used for state management, allowing all logic to flow from the components/UI to the services through its reducer pattern.

**Local:** Manages the state between the components and local storage.

**Cloud (Syncing):** Handles syncing data from local storage to the cloud, ensuring data integrity.

**Auth:** Manages the state for authentication services.

## Services

- **TaskService:** Manages CRUD operations for tasks.
- **SyncService:** Manages synchronization between local storage and the cloud.
- **AuthService:** Handles user authentication and authorization.
- **GoogleTasksAPIService:** Communicates with the Google Tasks API.
- **Notification/ErrorService:** Manages notifications and error handling.

## Components

- **List:** Displays a collection of tasks and provides operations such as filtering.
- **Task:** Represents an individual task.
- **Subtask:** Represents an indented subtask within a task.
- **Menu:** Provides settings and authentication options.
