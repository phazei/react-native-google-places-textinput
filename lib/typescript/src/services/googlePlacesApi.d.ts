interface FetchPredictionsParams {
    text: string;
    apiKey?: string;
    proxyUrl?: string;
    sessionToken?: string | null;
    languageCode?: string;
    includedRegionCodes?: string[];
    types?: string[];
    biasPrefixText?: (text: string) => string;
}
interface FetchPlaceDetailsParams {
    placeId: string;
    apiKey?: string;
    detailsProxyUrl?: string | null;
    sessionToken?: string | null;
    languageCode?: string;
    detailsFields?: string[];
}
interface PredictionResult {
    error: Error | null;
    predictions: any[];
}
interface PlaceDetailsResult {
    error: Error | null;
    details: any;
}
/**
 * Fetches place predictions from Google Places API
 */
export declare const fetchPredictions: ({ text, apiKey, proxyUrl, sessionToken, languageCode, includedRegionCodes, types, biasPrefixText, }: FetchPredictionsParams) => Promise<PredictionResult>;
/**
 * Fetches place details from Google Places API
 */
export declare const fetchPlaceDetails: ({ placeId, apiKey, detailsProxyUrl, sessionToken, languageCode, detailsFields, }: FetchPlaceDetailsParams) => Promise<PlaceDetailsResult>;
/**
 * Helper function to generate UUID v4
 */
export declare const generateUUID: () => string;
/**
 * RTL detection logic
 */
export declare const isRTLText: (text: string) => boolean;
export {};
//# sourceMappingURL=googlePlacesApi.d.ts.map