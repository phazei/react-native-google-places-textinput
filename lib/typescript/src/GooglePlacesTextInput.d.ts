import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle, TextInputProps } from 'react-native';
interface PlaceStructuredFormat {
    mainText: {
        text: string;
    };
    secondaryText?: {
        text: string;
    };
}
interface PlacePrediction {
    placeId: string;
    structuredFormat: PlaceStructuredFormat;
    types: string[];
}
interface PlaceDetailsFields {
    [key: string]: any;
}
interface Place {
    placeId: string;
    structuredFormat: PlaceStructuredFormat;
    types: string[];
    details?: PlaceDetailsFields;
}
interface GooglePlacesTextInputStyles {
    container?: StyleProp<ViewStyle>;
    input?: StyleProp<TextStyle>;
    suggestionsContainer?: StyleProp<ViewStyle>;
    suggestionsList?: StyleProp<ViewStyle>;
    suggestionItem?: StyleProp<ViewStyle>;
    suggestionText?: {
        main?: StyleProp<TextStyle>;
        secondary?: StyleProp<TextStyle>;
    };
    loadingIndicator?: {
        color?: string;
    };
    placeholder?: {
        color?: string;
    };
    clearButtonText?: StyleProp<ViewStyle>;
}
interface GooglePlacesAccessibilityLabels {
    input?: string;
    clearButton?: string;
    loadingIndicator?: string;
    /**
     * A function that receives a place prediction and returns a descriptive string
     * for the suggestion item.
     * @example (prediction) => `Select ${prediction.structuredFormat.mainText.text}, ${prediction.structuredFormat.secondaryText?.text}`
     */
    suggestionItem?: (prediction: PlacePrediction) => string;
}
type TextInputInheritedProps = Pick<TextInputProps, 'onFocus' | 'onBlur'>;
interface GooglePlacesTextInputProps extends TextInputInheritedProps {
    apiKey: string;
    value?: string;
    placeHolderText?: string;
    proxyUrl?: string;
    languageCode?: string;
    includedRegionCodes?: string[];
    types?: string[];
    biasPrefixText?: (text: string) => string;
    minCharsToFetch?: number;
    onPlaceSelect: (place: Place, sessionToken?: string | null) => void;
    onTextChange?: (text: string) => void;
    debounceDelay?: number;
    showLoadingIndicator?: boolean;
    showClearButton?: boolean;
    forceRTL?: boolean;
    style?: GooglePlacesTextInputStyles;
    clearElement?: ReactNode;
    hideOnKeyboardDismiss?: boolean;
    scrollEnabled?: boolean;
    nestedScrollEnabled?: boolean;
    fetchDetails?: boolean;
    detailsProxyUrl?: string | null;
    detailsFields?: string[];
    onError?: (error: any) => void;
    enableDebug?: boolean;
    accessibilityLabels?: GooglePlacesAccessibilityLabels;
}
interface GooglePlacesTextInputRef {
    clear: () => void;
    blur: () => void;
    focus: () => void;
    getSessionToken: () => string | null;
}
declare const GooglePlacesTextInput: import("react").ForwardRefExoticComponent<GooglePlacesTextInputProps & import("react").RefAttributes<GooglePlacesTextInputRef>>;
export type { GooglePlacesTextInputProps, GooglePlacesTextInputRef, GooglePlacesTextInputStyles, Place, PlaceDetailsFields, PlacePrediction, PlaceStructuredFormat, GooglePlacesAccessibilityLabels, };
export default GooglePlacesTextInput;
//# sourceMappingURL=GooglePlacesTextInput.d.ts.map