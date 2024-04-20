const axios = require('axios');

/**
 * MepostClient provides functionality to send and manage messages using the Mepost API.
 */
class MepostClient {
    private client: any;

    /**
     * Constructs a new instance of MepostClient.
     * @param {string} apiKey - The API key required for accessing the Mepost API.
     */
    constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: 'https://api.mepost.io/v1',
            headers: {
                'Authorization': apiKey,
                'Accept': 'application/json'
            }
        });
    }

    /**
     * Calls the Mepost API to get information about a specific scheduled message.
     * @param {string} schedule_id - The ID of the scheduled message.
     * @param {string} email - The email address to which the message was sent.
     * @returns {Promise<any>} - The response from the API.
     */
    public async getInfo(schedule_id: string, email: string): Promise<any> {
        try {
            const response = await this.client.get(`/messages/${schedule_id}/${email}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Calls the Mepost API to cancel a scheduled message.
     * @param {string} scheduledMessageId - The ID of the scheduled message to be cancelled.
     * @returns {Promise<any>} - The response from the API.
     */
    public async cancelScheduledMessage(scheduledMessageId: string): Promise<any> {
        try {
            const response = await this.client.post('/messages/cancel-scheduled', {
                scheduledMessageId
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Calls the Mepost API to get information about a specific scheduled message.
     * @param {string} scheduleId - The ID of the scheduled message.
     * @returns {Promise<any>} - The response from the API.
     */
    public async getScheduledMessage(scheduleId: string): Promise<any> {
        try {
            const response = await this.client.get(`/messages/schedule/${scheduleId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Calls the Mepost API to send an email.
     * @param {any} emailData - Data representing the email to be sent.
     * @returns {Promise<any>} - The response from the API.
     */
    public async sendEmail(emailData: any): Promise<any> {
        try {
            const response = await this.client.post('/messages/send', emailData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Calls the Mepost API to send an email using a template.
     * @param {any} emailData - Data representing the email to be sent.
     * @param {string} templateId - The ID of the template to be used for sending the email.
     * @returns {Promise<any>} - The response from the API.
     */
    public async sendEmailByTemplate(emailData: any, templateId: string): Promise<any> {
        try {
            const data = {
                message: emailData,
                templateId: templateId
            };
            const response = await this.client.post('/messages/send-by-template', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MepostClient;
