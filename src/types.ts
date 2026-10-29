export interface QuotaSnapshot {
  planName: string;
  unlimited: boolean;
  percentRemaining: number;
  quotaTotal: number;
  overageEnabled: boolean;
  overageUsed: number;
  resetDate: Date | null | undefined;
  // False when resetDate was derived from a date-only field (no time-of-day is meaningful).
  resetDateHasTime: boolean;
  capturedAt: Date;
}
