
# Comic Creator
![CI/CD](https://github.com/rashmigr01/comic-creator/workflows/CI/CD/badge.svg)
![License](https://img.shields.io/github/license/rashmigr01/comic-creator)

A React application which utilizes an API to generate 10 comic images from text prompt and creates a strip. The strip of images can be resized and rearranged to download a suitable comic image.

A screenshot of an example comic generation:
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## Table of Contents

- [Tech Stack](#tech-stack)

- [Run Locally](#run-locally)

- [Development Operations](#development-operations)

- [Examples](#examples)

- [User Flow](#user-flow)

- [Author](#author)

- [Acknowledgements](#acknowledgements)
## Tech Stack

To implement the application, the following tech was used:

**Backend:** Node.js

**Frontend:** React

**Framework:** Material UI

**Libraries:** react-grid-layout, html2canvas

**Deployment:** gh-pages

**CI/CD:** Lint, Build, Test and Deploy checks are automated through github workflows. Lint checks and Build checks are conducted on each pull request and on merging to main, the main CI/CD workflow is set up to run tests and deploy to gh-pages.


## Run Locally

#### Clone the project:

Create a local copy of this repository on your machine. You can use github cli/ssh keys as some other options!

```bash
  git clone https://github.com/rashmigr01/comic-creator.git
```

#### Go to the project directory:

Switch to the installed directory with a simple cd command.

```bash
  cd comic-creator
```

#### Install dependencies:

Install the necessary dependencies packages to your system with the following command.

```bash
  npm install
```

#### Run the development server:

To begin a development server execute the below command. This command will start the development server, and you should be able to access your React app at http://localhost:3000 in your web browser. You can stop the sever with `Ctrl + C`.

```bash
  npm start
```

Build the Production Version:

Optionally, create a production-ready build with this command which generates an optimized and minified build in the `build` folder.

```bash
  npm run build
```

Deploy:

To deploy to gh-pages, with preset scripts, the following command is useful.

```bash
  npm run deploy
```

However, it is not recommended that you deploy directly without running the workflows setup on github for lint checks and tests.

## Development Operations

After the above local installation, you can perform development operations to modify and extend the application.

The application is created using `create-react-app`. Read more about it [here](https://create-react-app.dev/).

During development, you can install packages to use frameworks or libraries using the following command:

```bash
  npm install your_package --save-dev
```

The main code base architecture can be visualized as follows:
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

The `AppLayout` along with the two main files of `ComicForm` and `ComicDisplay` are responsible for the functionality. Another file of interest is the `GenerateComic` API call function which is responsible for the text to image generation.

    
## Examples

Here are some comic examples as output by the application:

#### Test 1

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### Test 2

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### Test 3

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



## User Flow

The following steps are part of the user flow on the comic creator:

- Input text prompts for all 10 panels and click on the `GENERATE COMIC` button to make API calls.
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

- The progress bar depicts the number of returned API calls out of ten and thus the number of generated images.
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

- The default comic strip of a vertical layout is created.
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

- The pictures can be resized and reordered to create a more appealing and suitable comic strip.
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

- Click on the `DOWNLOAD IMAGE` button to download a `comic_strip.png` image of the current strip.
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

- Repeat the above steps to create more comics.


## Author

This comic creator was built by me, [@rashmigr01](https://www.github.com/rashmigr01), a senior undergraduate pursuing a B. Tech in CSE at IIT Kanpur. Please feel free to reach out to me with any queries at [rashmigr20@iitk.ac.in](mailto:rashmigr20@iitk.ac.in).


## Acknowledgements

This project wouldn't be possible without the wonderful opportunity by [DashToon](https://dashtoon.com/). I have learnt a lot while creating this app about layouts and design!
