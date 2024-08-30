mepost nodejs sdk
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

### Company Endpoints

#### `addDomain(request: AddDomainRequest)`

Adds a domain to the Mepost account.

-   Parameters
    -   `request`: An object containing the domain to add.

#### `getDomainList()`

Retrieves a list of domains associated with the Mepost account.

-   No parameters.

#### `removeDomain(request: RemoveDomainRequest)`

Removes a domain from the Mepost account.

-   Parameters
    -   `request`: An object containing the domain to remove.

### Groups Endpoints

#### `listGroups(limit = 10, page = 1)`

Retrieves a list of email groups.

-   Parameters
    -   `limit`: The maximum number of groups to return (default: 10).
    -   `page`: The page number for pagination (default: 1).

#### `createGroup(request: CreateNewGroupRequest)`

Creates a new email group.

-   Parameters
    -   `request`: An object containing the details of the new group.

#### `deleteGroup(groupId)`

Deletes an email group.

-   Parameters
    -   `groupId`: The ID of the group to delete.

#### `getGroupById(groupId)`

Retrieves information about a specific email group.

-   Parameters
    -   `groupId`: The ID of the group to retrieve.

#### `updateGroup(groupId, request: RenameGroupRequest)`

Updates the name of an email group.

-   Parameters
    -   `groupId`: The ID of the group to update.
    -   `request`: An object containing the new group name.

### Subscribers Endpoints

#### `listSubscribers(groupId, limit = 10, page = 1)`

Retrieves a list of subscribers in a group.

-   Parameters
    -   `groupId`: The ID of the group.
    -   `limit`: The maximum number of subscribers to return (default: 10).
    -   `page`: The page number for pagination (default: 1).

#### `addSubscriber(groupId, request: CreateSubscriberRequest)`

Adds a subscriber to a group.

-   Parameters
    -   `groupId`: The ID of the group.
    -   `request`: An object containing subscriber details.

#### `deleteSubscriber(groupId, request: DeleteSubscriberRequest)`

Deletes a subscriber from a group.

-   Parameters
    -   `groupId`: The ID of the group.
    -   `request`: An object containing the emails of subscribers to delete.

#### `getSubscriberByEmail(groupId, email)`

Retrieves subscriber details by email.

-   Parameters
    -   `groupId`: The ID of the group.
    -   `email`: The email address of the subscriber.

### Messages Endpoints

#### `getMessageInfo(scheduleId, email)`

Retrieves information about a specific scheduled message.

-   Parameters
    -   `scheduleId`: The ID of the scheduled message.
    -   `email`: The email address to which the message was sent.

#### `cancelScheduledMessage(request: CancelScheduledMessageRequest)`

Cancels a scheduled message.

-   Parameters
    -   `request`: An object containing the scheduled message ID.

#### `sendMarketing(request: SendMarketingRequest)`

Sends a marketing email.

-   Parameters
    -   `request`: An object for sending marketing emails.

#### `sendMessageByTemplate(request: SendMessageByTemplateRequest)`

Sends an email using a template.

-   Parameters
    -   `request`: An object containing the message details and template ID.

#### `getScheduleInfo(scheduleId)`

Retrieves schedule information for a specific scheduled message.

-   Parameters
    -   `scheduleId`: The ID of the scheduled message.

#### `sendTransactional(request: SendTransactionalRequest)`

Sends a transactional email.

-   Parameters
    -   `request`: An object for sending transactional emails.

#### `sendTransactionalByTemplate(request: SendMessageByTemplateRequest)`

Sends a transactional email using a template.

-   Parameters
    -   `request`: An object containing the message details and template ID.

### Outbound IP Endpoints

#### `createIpGroup(request: CreateIpGroupRequest)`

Creates a new IP group.

-   Parameters
    -   `request`: An object containing the IP group details.

#### `getIpGroupInfo(name)`

Retrieves information about a specific IP group.

-   Parameters
    -   `name`: The name of the IP group.

#### `listIpGroups()`

Retrieves a list of all IP groups.

-   No parameters.

#### `cancelWarmup(request: CancelWarmUpRequest)`

Cancels a warmup process for an IP address.

-   Parameters
    -   `request`: An object containing the IP address.

#### `getIpInfo(ip)`

Retrieves information about a specific IP address.

-   Parameters
    -   `ip`: The IP address to retrieve.

#### `listIps()`

Retrieves a list of all IP addresses.

-   No parameters.

#### `setIpGroup(request: SetIpGroupRequest)`

Assigns an IP address to a specific IP group.

-   Parameters
    -   `request`: An object containing the IP address and group details.

#### `startWarmup(request: StartWarmUpRequest)`

Starts a warmup process for an IP address.

-   Parameters
    -   `request`: An object containing the IP address.

Contributing
------------

Contributions are always welcome! Please read the contributing guide for ways to contribute to this project.

License
-------

`mepost-sdk` is released under the MIT License. See the LICENSE file for more details.
