# URL Shortener App

This URL Shortener app, built with Node.js, Express.js, MongoDB, bcrypt, cookie-parser, ejs, and Json Web Token, empowers users to transform lengthy URLs into concise ones. The application incorporates authentication-based account creation, enabling users to keep track of click statistics and other relevant information for their shortened URLs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The URL Shortener App is a web-based application designed to efficiently shorten URLs.

1. Enter the URL you wish to redirect to.
2. Obtain the shortened version of the URL.
3. Navigate back to the homepage to monitor previously shortened URLs.
4. Enjoy the seamless login/register functionality.

The app utilizes a straightforward array to store URL objects, ensuring a user-friendly interaction.

## Features

Explore the key features of the URL Shortener App:

- **Shorten URLs:** Users can transform lengthy URLs into shorter, more manageable ones.

- **Click Tracking:** Keep track of the number of clicks and other relevant information for each shortened URL.

- **Authentication:** Secure account creation and authentication ensure user privacy and personalized URL management.

## Getting Started

To kickstart your experience with the URL Shortener App, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/harshdeep61034/URL_Shortner_App
   ```

2. Navigate to the project directory.

3. Type npm install & npm start in Terminal  & head over to 'Localhost:6000'.

## Usage

Once the app is up and running, efficiently manage your shortened URLs:

- Click the "SHORTEN URL" button to transform a long URL into a short one. Enter the URL and submit the form.

- The app will display a list of your shortened URLs along with relevant details.

- To remove a URL, click the "Remove" button associated with it.

- Experience the convenience of tracking click statistics and managing your URLs securely.

Please note that this version of the app currently does not incorporate server-side storage. Future iterations may include options for server-side storage.

## Contributing

Contributions to this project are highly appreciated! To contribute, adhere to these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with clear and concise messages:

   ```bash
   git commit -m "Add feature: your feature name"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request to merge your changes into the main branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
