// Requests
export interface AddDomainRequest {
    domain: string;
}

export interface RemoveDomainRequest {
    domain: string;
}

export interface CancelScheduledMessageRequest {
    scheduledMessageId: string;
}

export interface CancelWarmUpRequest {
    ipAddress: string;
}

export interface CreateIpGroupRequest {
    groupName: string;
}

export interface CreateNewGroupRequest {
    name: string;
    to: To[];
}

export interface CreateSubscriberRequest {
    to: To[];
}

export interface DeleteSubscriberRequest {
    emails: string[];
}

export interface RenameGroupRequest {
    name: string;
}

export interface SendMarketingRequest {
    attachments?: AttachmentDto[];
    customization?: { [key: string]: string };
    fromEmail: string;
    fromName: string;
    headers?: { [key: string]: string };
    html?: string;
    ipGroup?: string;
    returnPath?: string;
    scheduledAt?: string;
    subject: string;
    text?: string;
    to: string[];
}

export interface SendMessageByTemplateRequest {
    message: MessageDto;
    templateId: string;
}

export interface SendTransactionalRequest {
    attachments?: AttachmentDto[];
    customization?: { [key: string]: string };
    fromEmail: string;
    fromName: string;
    headers?: { [key: string]: string };
    html?: string;
    ipGroup?: string;
    returnPath?: string;
    scheduledAt?: string;
    subject: string;
    text?: string;
    to: To[];
}

export interface SetIpGroupRequest {
    groupName: string;
    ipAddress: string;
}

export interface StartWarmUpRequest {
    ipAddress: string;
}

// Supporting DTOs
export interface To {
    customization?: { [key: string]: string };
    email: string;
    name: string;
    type?: string;
}

export interface AttachmentDto {
    base64Content: string;
    fileName: string;
}

export interface MessageDto {
    attachments?: AttachmentDto[];
    customization?: { [key: string]: string };
    fromEmail: string;
    fromName: string;
    headers?: { [key: string]: string };
    html?: string;
    ipGroup?: string;
    returnPath?: string;
    scheduledAt?: string;
    subject: string;
    text?: string;
    to: To[];
}

// Responses
export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export interface AddDomainResponse {
    dkim: DNSRecord;
    dmarc: DNSRecord;
    domain: string;
    spf: DNSRecord;
}

export interface CancelWarmUpResponse {
    cancelledAt: string;
    ipAddress: string;
    startedAt: string;
}

export interface GetMessageInfoResponse {
    email: string;
    emailClicksCount: number;
    emailClicksDetail: EmailClickDetail[];
    emailReadsCount: number;
    emailReadsDetail: EmailReadDetail[];
    state: string;
    subject: string;
    templateId: string;
}

export interface GetScheduleInfoResponse {
    details: ScheduleDetails;
    emailReadsCount: number;
    emailReadsUnique: number;
    hardBounceCount: number;
    linkClicksCount: number;
    otherBounceCount: number;
    senderFromEmail: string;
    senderFromName: string;
    softBounceCount: number;
    state: string;
    subject: string;
    templateId: string;
    unsubscribeCount: number;
}

export interface RemoveDomainResponse {
    domain: string;
    removedAt: string;
}

export interface SetIpGroupResponse {
    ipAddress: string;
    ipGroup: IPGroup;
}

export interface StartWarmUpResponse {
    endAt: string;
    ipAddress: string;
    startAt: string;
    status: string;
}

// Additional supporting interfaces
export interface DNSRecord {
    content: string;
    name: string;
    type: string;
}

export interface EmailClickDetail {
    city: string;
    countryCode: string;
    ip: string;
    url: string;
}

export interface EmailReadDetail {
    city: string;
    countryCode: string;
    ip: string;
}

export interface ScheduleDetails {
    clicks: EmailTransactionEvent[];
    hardBounces: EmailTransactionEvent[];
    reads: EmailTransactionEvent[];
    softBounces: EmailTransactionEvent[];
    unsubscribes: EmailTransactionEvent[];
}

export interface EmailTransactionEvent {
    bounceCode?: string;
    city?: string;
    countryCode?: string;
    createdAt?: string;
    data?: string;
    eventType?: string;
    id?: string;
    ip?: string;
    statId?: string;
    subscriberId?: string;
    transactionId?: string;
}

// Newly Added Interfaces

export interface BaseResult<T> {
    data: T[];
    total: number;
}

export interface CompanyDomain {
    awsRegion: string;
    awsVerified: boolean;
    company: Company;
    companyId: number;
    createdAt: string;
    dkimContent: string;
    dkimName: string;
    dkimPrivateKey: string;
    dkimSelector: string;
    dkimVerified: boolean;
    dmarcContent: string;
    dmarcName: string;
    dmarcVerified: boolean;
    domain: string;
    hasAwsIdentity: boolean;
    isVerified: boolean;
    spfContent: string;
    spfName: string;
    spfVerified: boolean;
    updatedAt: string;
    uuid: string;
}

export interface EmailGroup {
    companyId: number;
    createdAt: Date;
    generalScore: number;
    isWeb: boolean;
    name: string;
    newsletterScore: number;
    priority: number;
    totalActiveSubscriber: number;
    totalSubscriber: number;
    totalUnsubscribe: number;
    updatedAt: Date;
    uuid: string;
}

export interface EmailGroupWithCounts {
    companyId: number;
    createdAt: Date;
    generalScore: number;
    isWeb: boolean;
    name: string;
    newsletterScore: number;
    priority: number;
    totalActiveSubscriber: number;
    totalBounced: number;
    totalSubscriber: number;
    totalUnsubscribe: number;
    updatedAt: Date;
    uuid: string;
}

export interface IPGroup {
    companyId: number;
    createdAt: string;
    ipAddresses: IpAddress[];
    name: string;
    updatedAt: string;
    uuid: string;
}

export interface IpAddress {
    companyId: number;
    createdAt: string;
    ip: string;
    ipGroupId: number;
    reverseDNS?: string;
    status: string;
    updatedAt: string;
    uuid: string;
}

export interface Schedule {
    approved: boolean;
    authorizedToSend: boolean;
    createdAt: Date;
    creditAmount: number;
    emailGroupId: number;
    jobStatus: string;
    jobType: string;
    reason: string;
    resultType: string;
    scheduledAt: Date;
    statId: string;
    template: Template;
    updatedAt: Date;
    uuid: string;
}

export interface Subscriber {
    bounced: boolean;
    confirmCode: string;
    confirmIp: string;
    confirmed: boolean;
    createdAt: Date;
    customFields: CustomField[];
    emailAddress: string;
    emailGroupId: number;
    subscribedAt: Date;
    unsubscribed: boolean;
    updatedAt: Date;
    uuid: string;
}

export interface CustomField {
    name: string;
    value: string;
}

export interface Company {
    companyPlan: CompanyPlan;
    companyPlanID: number;
    createdAt: Date;
    footerHtml: string;
    footerText: string;
    name: string;
    ownerId: number;
    priority: number;
    updatedAt: Date;
    uuid: string;
}

export interface CompanyPlan {
    companyID: number;
    createdAt: Date;
    currentUsage: number;
    endedAt: Date;
    lastBilled: Date;
    pricingPlan: PricingPlan;
    pricingPlanID: number;
    selectedContactsLimit: number;
    selectedDataRetention: number;
    selectedEmailLimit: number;
    startedAt: Date;
    status: string;
    updatedAt: Date;
    uuid: string;
}

export interface PricingPlan {
    createdAt: Date;
    dailyLimit: number;
    maximumEmail: number;
    name: string;
    planType: string;
    updatedAt: Date;
    uuid: string;
}

export interface Template {
    config: string;
    createdAt: Date;
    name: string;
    rawHtml: string;
    rawText: string;
    subject: string;
    updatedAt: Date;
    uuid: string;
}
