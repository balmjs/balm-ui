import { useI18n } from 'vue-i18n';

const useTranslation = () => {
  const { t } = useI18n();

  return { t };
};

export default useTranslation;
