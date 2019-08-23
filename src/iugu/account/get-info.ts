import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface GetAccountInfo {
  Request: Request;
  Response: Response;
}

type Request = AxiosRequestConfig & {
  url: "/accounts/:id";
  method: "GET";
  data: void;
};

type Response = AxiosResponse<void> & {
  status: 200;
  data: {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    "can_receive?": boolean;
    "is_verified?": boolean;
    last_verification_request_status: string;
    last_verification_request_data?: any;
    last_verification_request_feedback?: any;
    change_plan_type: number;
    subscriptions_trial_period: number;
    subscriptions_billing_days?: any;
    disable_emails: boolean;
    last_withdraw?: any;
    reply_to: string;
    webapp_on_test_mode: boolean;
    marketplace: boolean;
    default_return_url?: any;
    credit_card_verified: boolean;
    fines?: any;
    late_payment_fine?: any;
    per_day_interest?: any;
    old_advancement: boolean;
    early_payment_discount?: any;
    early_payment_discount_days?: any;
    early_payment_discount_percent?: any;
    auto_withdraw: boolean;
    payment_email_notification: boolean;
    payment_email_notification_receiver?: any;
    auto_advance: boolean;
    auto_advance_type?: any;
    auto_advance_option?: any;
    balance: string;
    balance_in_protest: string;
    balance_available_for_withdraw: string;
    protected_balance: string;
    payable_balance: string;
    receivable_balance: string;
    commission_balance: string;
    volume_last_month: string;
    volume_this_month: string;
    total_subscriptions: number;
    total_active_subscriptions: number;
    taxes_paid_last_month: string;
    taxes_paid_this_month: string;
    "has_bank_address?": boolean;
    permissions?: any;
    custom_logo_url?: any;
    custom_logo_small_url?: any;
    early_payment_discounts: any[];
    informations: Information[];
    configuration: Configuration;
    commissions: Commissions;
  };
};

interface Commissions {
  cents?: any;
  percent: number;
  credit_card_cents?: any;
  credit_card_percent?: any;
  bank_slip_cents?: any;
  bank_slip_percent?: any;
  permit_aggregated: boolean;
}

interface Configuration {
  auto_withdraw: boolean;
  payment_email_notification: boolean;
  payment_email_notification_receiver?: any;
  auto_advance?: any;
  auto_advance_type?: any;
  auto_advance_option?: any;
  commission_percent: number;
  owner_emails_to_notify?: any;
  fines?: any;
  late_payment_fine?: any;
  per_day_interest?: any;
  bank_slip: Bankslip;
  credit_card: Creditcard;
  early_payment_discount?: any;
  early_payment_discount_days?: any;
  early_payment_discount_percent?: any;
}

interface Creditcard {
  active: boolean;
  soft_descriptor: string;
  installments: boolean;
  installments_pass_interest: boolean;
  max_installments: string;
  max_installments_without_interest: string;
  two_step_transaction: boolean;
}

interface Bankslip {
  active: boolean;
  extra_due: string;
  reprint_extra_due: string;
}

interface Information {
  key: string;
  value: string;
}
