import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "widgets/Button";
import {ThemeButton} from "widgets/Button/ui/Button";

interface LangSwitcherProps {
    className?: string;

}

const LangSwitcher = ({className} : LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames("", {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}>
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;