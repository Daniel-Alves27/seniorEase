export interface User {
  uid: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface UserPreferences {
  fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high';
  spacing: 'normal' | 'large';
  simpleMode: boolean;
  confirmations: boolean;
}
