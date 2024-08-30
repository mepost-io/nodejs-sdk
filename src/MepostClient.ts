import axios, { AxiosInstance } from 'axios';
import { 
    AddDomainRequest, 
    RemoveDomainRequest,
    CancelScheduledMessageRequest, 
    CancelWarmUpRequest, 
    CreateIpGroupRequest, 
    CreateNewGroupRequest,
    CreateSubscriberRequest,
    DeleteSubscriberRequest,
    RenameGroupRequest,
    SendMarketingRequest,
    SendMessageByTemplateRequest,
    SendTransactionalRequest,
    SetIpGroupRequest,
    StartWarmUpRequest,
    AddDomainResponse,
    CompanyDomain,
    RemoveDomainResponse,
    BaseResult,
    EmailGroup,
    EmailGroupWithCounts,
    Subscriber,
    GetMessageInfoResponse,
    GetScheduleInfoResponse,
    Schedule,
    IPGroup,
    CancelWarmUpResponse,
    IpAddress,
    SetIpGroupResponse,
    StartWarmUpResponse,
    ApiResponse
} from './types';

/**
 * MepostClient provides functionality to send and manage messages using the Mepost API.
 */
class MepostClient {
    private client: AxiosInstance;

    constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: 'https://api.mepost.io/v1',
            headers: {
                'Authorization': apiKey,
                'Accept': 'application/json'
            }
        });
    }

    // Company Endpoints

    /**
     * Adds a domain to the Mepost account.
     * @param {AddDomainRequest} request - The request object containing the domain to add.
     * @returns {Promise<ApiResponse<AddDomainResponse>>} - The response from the API.
     */
    public async addDomain(request: AddDomainRequest): Promise<ApiResponse<AddDomainResponse>> {
        return this.request<ApiResponse<AddDomainResponse>>('POST', '/company/domain/add', request);
    }

    /**
     * Retrieves a list of domains associated with the Mepost account.
     * @returns {Promise<ApiResponse<CompanyDomain[]>>} - The response from the API.
     */
    public async getDomainList(): Promise<ApiResponse<CompanyDomain[]>> {
        return this.request<ApiResponse<CompanyDomain[]>>('GET', '/company/domain/list');
    }

    /**
     * Removes a domain from the Mepost account.
     * @param {RemoveDomainRequest} request - The request object containing the domain to remove.
     * @returns {Promise<ApiResponse<RemoveDomainResponse>>} - The response from the API.
     */
    public async removeDomain(request: RemoveDomainRequest): Promise<ApiResponse<RemoveDomainResponse>> {
        return this.request<ApiResponse<RemoveDomainResponse>>('DELETE', '/company/domain/remove', request);
    }

    // Groups Endpoints

    /**
     * Retrieves a list of email groups.
     * @param {number} limit - The maximum number of groups to return.
     * @param {number} page - The page number for pagination.
     * @returns {Promise<ApiResponse<BaseResult<EmailGroup>>>} - The response from the API.
     */
    public async listGroups(limit = 10, page = 1): Promise<ApiResponse<BaseResult<EmailGroup>>> {
        return this.request<ApiResponse<BaseResult<EmailGroup>>>('GET', `/groups?limit=${limit}&page=${page}`);
    }

    /**
     * Creates a new email group.
     * @param {CreateNewGroupRequest} request - The request object containing the details of the new group.
     * @returns {Promise<ApiResponse<EmailGroup>>} - The response from the API.
     */
    public async createGroup(request: CreateNewGroupRequest): Promise<ApiResponse<EmailGroup>> {
        return this.request<ApiResponse<EmailGroup>>('POST', '/groups', request);
    }

    /**
     * Deletes an email group.
     * @param {string} groupId - The ID of the group to delete.
     * @returns {Promise<ApiResponse<boolean>>} - The response from the API.
     */
    public async deleteGroup(groupId: string): Promise<ApiResponse<boolean>> {
        return this.request<ApiResponse<boolean>>('DELETE', `/groups/${groupId}`);
    }

    /**
     * Retrieves information about a specific email group.
     * @param {string} groupId - The ID of the group to retrieve.
     * @returns {Promise<ApiResponse<EmailGroupWithCounts>>} - The response from the API.
     */
    public async getGroupById(groupId: string): Promise<ApiResponse<EmailGroupWithCounts>> {
        return this.request<ApiResponse<EmailGroupWithCounts>>('GET', `/groups/${groupId}`);
    }

    /**
     * Updates the name of an email group.
     * @param {string} groupId - The ID of the group to update.
     * @param {RenameGroupRequest} request - The request object containing the new group name.
     * @returns {Promise<ApiResponse<boolean>>} - The response from the API.
     */
    public async updateGroup(groupId: string, request: RenameGroupRequest): Promise<ApiResponse<boolean>> {
        return this.request<ApiResponse<boolean>>('PUT', `/groups/${groupId}`, request);
    }

    // Subscribers Endpoints

    /**
     * Retrieves a list of subscribers in a group.
     * @param {string} groupId - The ID of the group.
     * @param {number} limit - The maximum number of subscribers to return.
     * @param {number} page - The page number for pagination.
     * @returns {Promise<ApiResponse<BaseResult<Subscriber>>>} - The response from the API.
     */
    public async listSubscribers(groupId: string, limit = 10, page = 1): Promise<ApiResponse<BaseResult<Subscriber>>> {
        return this.request<ApiResponse<BaseResult<Subscriber>>>('GET', `/groups/${groupId}/subscribers?limit=${limit}&page=${page}`);
    }

    /**
     * Adds a subscriber to a group.
     * @param {string} groupId - The ID of the group.
     * @param {CreateSubscriberRequest} request - The request object containing subscriber details.
     * @returns {Promise<ApiResponse<boolean>>} - The response from the API.
     */
    public async addSubscriber(groupId: string, request: CreateSubscriberRequest): Promise<ApiResponse<boolean>> {
        return this.request<ApiResponse<boolean>>('POST', `/groups/${groupId}/subscribers`, request);
    }

    /**
     * Deletes a subscriber from a group.
     * @param {string} groupId - The ID of the group.
     * @param {DeleteSubscriberRequest} request - The request object containing the emails of subscribers to delete.
     * @returns {Promise<ApiResponse<boolean>>} - The response from the API.
     */
    public async deleteSubscriber(groupId: string, request: DeleteSubscriberRequest): Promise<ApiResponse<boolean>> {
        return this.request<ApiResponse<boolean>>('DELETE', `/groups/${groupId}/subscribers`, request);
    }

    /**
     * Retrieves subscriber details by email.
     * @param {string} groupId - The ID of the group.
     * @param {string} email - The email address of the subscriber.
     * @returns {Promise<ApiResponse<Subscriber>>} - The response from the API.
     */
    public async getSubscriberByEmail(groupId: string, email: string): Promise<ApiResponse<Subscriber>> {
        return this.request<ApiResponse<Subscriber>>('GET', `/groups/${groupId}/subscribers/${email}`);
    }

    // Messages Endpoints

    /**
     * Retrieves information about a specific scheduled message.
     * @param {string} scheduleId - The ID of the scheduled message.
     * @param {string} email - The email address to which the message was sent.
     * @returns {Promise<ApiResponse<GetMessageInfoResponse>>} - The response from the API.
     */
    public async getMessageInfo(scheduleId: string, email: string): Promise<ApiResponse<GetMessageInfoResponse>> {
        return this.request<ApiResponse<GetMessageInfoResponse>>('GET', `/messages/${scheduleId}/${email}`);
    }

    /**
     * Cancels a scheduled message.
     * @param {CancelScheduledMessageRequest} request - The request object containing the scheduled message ID.
     * @returns {Promise<ApiResponse<boolean>>} - The response from the API.
     */
    public async cancelScheduledMessage(request: CancelScheduledMessageRequest): Promise<ApiResponse<boolean>> {
        return this.request<ApiResponse<boolean>>('POST', '/messages/cancel-scheduled', request);
    }

    /**
     * Sends a marketing email.
     * @param {SendMarketingRequest} request - The request object for sending marketing emails.
     * @returns {Promise<ApiResponse<Schedule>>} - The response from the API.
     */
    public async sendMarketing(request: SendMarketingRequest): Promise<ApiResponse<Schedule>> {
        return this.request<ApiResponse<Schedule>>('POST', '/messages/marketing', request);
    }

    /**
     * Sends an email using a template.
     * @param {SendMessageByTemplateRequest} request - The request object containing the message details and template ID.
     * @returns {Promise<ApiResponse<Schedule>>} - The response from the API.
     */
    public async sendMessageByTemplate(request: SendMessageByTemplateRequest): Promise<ApiResponse<Schedule>> {
        return this.request<ApiResponse<Schedule>>('POST', '/messages/marketing-by-template', request);
    }

    /**
     * Retrieves schedule information for a specific scheduled message.
     * @param {string} scheduleId - The ID of the scheduled message.
     * @returns {Promise<ApiResponse<GetScheduleInfoResponse>>} - The response from the API.
     */
    public async getScheduleInfo(scheduleId: string): Promise<ApiResponse<GetScheduleInfoResponse>> {
        return this.request<ApiResponse<GetScheduleInfoResponse>>('GET', `/messages/schedule/${scheduleId}`);
    }

    /**
     * Sends a transactional email.
     * @param {SendTransactionalRequest} request - The request object for sending transactional emails.
     * @returns {Promise<ApiResponse<Schedule>>} - The response from the API.
     */
    public async sendTransactional(request: SendTransactionalRequest): Promise<ApiResponse<Schedule>> {
        return this.request<ApiResponse<Schedule>>('POST', '/messages/transactional', request);
    }

    /**
     * Sends a transactional email using a template.
     * @param {SendMessageByTemplateRequest} request - The request object containing the message details and template ID.
     * @returns {Promise<ApiResponse<Schedule>>} - The response from the API.
     */
    public async sendTransactionalByTemplate(request: SendMessageByTemplateRequest): Promise<ApiResponse<Schedule>> {
        return this.request<ApiResponse<Schedule>>('POST', '/messages/transactional-by-template', request);
    }

    // Outbound IP Endpoints

    /**
     * Creates a new IP group.
     * @param {CreateIpGroupRequest} request - The request object containing the IP group details.
     * @returns {Promise<ApiResponse<IPGroup>>} - The response from the API.
     */
    public async createIpGroup(request: CreateIpGroupRequest): Promise<ApiResponse<IPGroup>> {
        return this.request<ApiResponse<IPGroup>>('POST', '/outbound/ip-group/create', request);
    }

    /**
     * Retrieves information about a specific IP group.
     * @param {string} name - The name of the IP group.
     * @returns {Promise<ApiResponse<IPGroup>>} - The response from the API.
     */
    public async getIpGroupInfo(name: string): Promise<ApiResponse<IPGroup>> {
        return this.request<ApiResponse<IPGroup>>('GET', `/outbound/ip-group/info/${name}`);
    }

    /**
     * Retrieves a list of all IP groups.
     * @returns {Promise<ApiResponse<IPGroup[]>>} - The response from the API.
     */
    public async listIpGroups(): Promise<ApiResponse<IPGroup[]>> {
        return this.request<ApiResponse<IPGroup[]>>('GET', '/outbound/ip-group/list');
    }

    /**
     * Cancels a warmup process for an IP address.
     * @param {CancelWarmUpRequest} request - The request object containing the IP address.
     * @returns {Promise<ApiResponse<CancelWarmUpResponse>>} - The response from the API.
     */
    public async cancelWarmup(request: CancelWarmUpRequest): Promise<ApiResponse<CancelWarmUpResponse>> {
        return this.request<ApiResponse<CancelWarmUpResponse>>('POST', '/outbound/ip/cancel-warmup', request);
    }

    /**
     * Retrieves information about a specific IP address.
     * @param {string} ip - The IP address to retrieve.
     * @returns {Promise<ApiResponse<IpAddress>>} - The response from the API.
     */
    public async getIpInfo(ip: string): Promise<ApiResponse<IpAddress>> {
        return this.request<ApiResponse<IpAddress>>('GET', `/outbound/ip/info/${ip}`);
    }

    /**
     * Retrieves a list of all IP addresses.
     * @returns {Promise<ApiResponse<IpAddress[]>>} - The response from the API.
     */
    public async listIps(): Promise<ApiResponse<IpAddress[]>> {
        return this.request<ApiResponse<IpAddress[]>>('GET', '/outbound/ip/list');
    }

    /**
     * Assigns an IP address to a specific IP group.
     * @param {SetIpGroupRequest} request - The request object containing the IP address and group details.
     * @returns {Promise<ApiResponse<SetIpGroupResponse>>} - The response from the API.
     */
    public async setIpGroup(request: SetIpGroupRequest): Promise<ApiResponse<SetIpGroupResponse>> {
        return this.request<ApiResponse<SetIpGroupResponse>>('POST', '/outbound/ip/set-ip-group', request);
    }

    /**
     * Starts a warmup process for an IP address.
     * @param {StartWarmUpRequest} request - The request object containing the IP address.
     * @returns {Promise<ApiResponse<StartWarmUpResponse>>} - The response from the API.
     */
    public async startWarmup(request: StartWarmUpRequest): Promise<ApiResponse<StartWarmUpResponse>> {
        return this.request<ApiResponse<StartWarmUpResponse>>('POST', '/outbound/ip/start-warmup', request);
    }

    /**
     * Generic request handler for sending HTTP requests to the Mepost API.
     * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
     * @param {string} endpoint - The API endpoint to send the request to.
     * @param {any} data - The request body data (optional).
     * @returns {Promise<T>} - The response from the API.
     */
    private async request<T>(method: string, endpoint: string, data: any = null): Promise<T> {
        try {
            const response = await this.client.request({
                method,
                url: endpoint,
                data
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default MepostClient;