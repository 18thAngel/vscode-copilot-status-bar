export interface QuotaSnapshot {
  planName: string;

  //////////
  // quota related fields
  //////////

  // ****
  // maximum related fields:
  // ****

  /**
   * Indicates whether the quota is unlimited.
   * Needed for calculations involving quota limits
   * and avoiding division by zero.
   */
  unlimited: boolean;

  /**
   * The total quota limit.
   * Should be a positive number if `unlimited` is false.
   * Ignored if `unlimited` is true, but should still be a valid not zero number.
   * suggested to be -1 when unlimited.
   */
  quotaTotal: number;

  // ****
  // retrieved values from the quota provider
  // if provider does only provide absolute OR percentage value
  // the missing value will be calculated from the available one.
  // ****

  /**
   * The amount of quota used.
   */
  quotaUsed: number | null | undefined;

  /**
   * The percentage of quota used.
   */
  percentUsed: number | null | undefined;
  // ****
  // calculated fields:
  // ****
  /**
   * The amount of quota remaining.
   * -1 if the quota is unlimited.
   */
  quotaRemaining: number | null | undefined;

  /**
   * The percentage of quota remaining.
   * 100 if the quota is unlimited.
   */
  percentRemaining: number | null | undefined;

  // ****
  // used for internal calculations, calculated once per snapshot,
  // to avoid repeated computation of exceptional values, like division by zero.
  // ****

  /**
   * The factor used for percentage calculations.
   * 0 if the quota is unlimited, otherwise 100 / quotaTotal.
   */
  percentageFactor: number | null | undefined;

  // ****
  // misc fields
  // **** 
  overageEnabled: boolean;
  overageUsed: number;
  resetDate: Date | null | undefined;
  // False when resetDate was derived from a date-only field (no time-of-day is meaningful).
  resetDateHasTime: boolean;
  capturedAt: Date;
}
