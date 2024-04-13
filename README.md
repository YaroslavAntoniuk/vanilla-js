# Vanilla JS Mastery

This repository is a testament to the power and flexibility of core JavaScript, often referred to as "Vanilla JS". It is a demonstration of how one can build rich, interactive web applications without the crutch of libraries or frameworks.

## Overview

The main goal of this repository is to showcase the fundamental concepts of JavaScript and how they can be used to create complex functionality. This includes:

- Understanding and using the DOM API
- Finding and modifying elements in the DOM
- Handling events

In addition, this repository also explores advanced topics such as:

- Single Page Application (SPA) routing
- Web components and shadow DOM
- Reactive programming with proxies

## Project: Coffee Masters

To put these concepts into practice, we have built a real web application, "Coffee Masters". This application serves as a practical example of how the aforementioned concepts can be used in a real-world scenario.

## Why Vanilla JS?

While libraries and frameworks can speed up development and make coding easier, they also add an extra layer of complexity and can obscure the underlying workings of the web. By focusing on Vanilla JS, we aim to provide a deeper understanding of JavaScript, giving you the tools to not only use libraries and frameworks more effectively, but also to solve problems without them when necessary.

## Running the Project Locally

To run this project locally, we recommend using the Live Server extension in Visual Studio Code. This will allow you to serve the project from your local machine and see changes in real-time as you modify the code.

However, to ensure that all pages reload without any problems, you should add the following setting to your Visual Studio Code settings.json file:

```json
"liveServer.settings.file": "index.html",
```

This setting ensures that Live Server always serves the index.html file, which is the entry point of our application.

To modify your settings.json file:

- Open Visual Studio Code.
- Click on the gear icon in the lower left corner to open the settings menu.
- Click on "Settings".
- Search for "settings.json".
- Click on "Edit in settings.json".
- Add the above line to the JSON object in this file.
- Save the file.

Now, when you run Live Server, it should serve the index.html file by default, allowing all pages to reload without any issues.
