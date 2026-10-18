export type BagType = 'D-Cut' | 'W-Cut' | 'Box' | 'Loop' | 'Other';

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  bag_type?: string;
  quantity?: string;
  size?: string;
  colour?: string;
  printing?: string;
  message?: string;
}
