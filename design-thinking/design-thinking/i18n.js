import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import ar from './localization/ar';
import en from './localization/en';

i18n.fallbacks = true;
i18n.translations = { ar, en };
i18n.locale = Localization.locale || 'en';

export default i18n;
