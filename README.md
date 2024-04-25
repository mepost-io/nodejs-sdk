mepost-sdk
==========

The `mepost-sdk` is a Node.js library designed to simplify interactions with the Mepost API. It provides convenient methods to send and manage messages efficiently. This SDK is perfect for developers looking to integrate Mepost messaging capabilities into their applications.

Features
--------

-   Send emails directly through the Mepost API.
-   Schedule and manage email deliveries.
-   Retrieve detailed information about scheduled messages.
-   Cancel scheduled messages.
-   Send emails using predefined templates.

Installation
------------

Install `mepost-sdk` using npm:

`npm install mepost-sdk`

Or using yarn:

`yarn add mepost-sdk`

Usage
-----

Here is a quick example to get you started:

``` node
const mepost = require('mepost-sdk');

// Create an instance of MepostClient with your API key
const client = mepost.auth('your_api_key_here');

// Send an email
const emailData = {
    "from_email": "info@example.com",
    "from_name": "Example Company",
    "html": "This is a test email sent from the Mepost Go SDK.",
    "subject": "Example Subject",
    "to": [
        { "email": "recipient1@example.com" },
        { "email": "recipient2@example.com" }
    ]
};

await client.sendEmail(emailData)
```
API Methods
-----------

### `auth(apiKey)`

Initializes and returns a new instance of MepostClient.

-   Parameters
    -   `apiKey`: Your Mepost API key.

### `sendEmail(emailData)`

Sends an email with specified data.

-   Parameters
    -   `emailData`: An object containing email fields such as from, to, subject, and body.

### `sendEmailByTemplate(emailData, templateId)`

Sends an email using a specified template.

-   Parameters
    -   `emailData`: An object containing email fields and template variables.
    -   `templateId`: The ID of the template you want to use.

### `getInfo(scheduleId)`

Retrieves information about a specific scheduled message.

-   Parameters
    -   `scheduleId`: The ID of the scheduled message.

### `cancelScheduledMessage(scheduledMessageId)`

Cancels a scheduled message.

-   Parameters
    -   `scheduledMessageId`: The ID of the message you want to cancel.

### `getScheduledMessage(scheduleId)`

Retrieves a scheduled message.

-   Parameters
    -   `scheduleId`: The ID of the scheduled message.

Contributing
------------

Contributions are always welcome! Please read the contributing guide for ways to contribute to this project.

License
-------

`mepost-sdk` is released under the MIT License. See the LICENSE file for more details.
