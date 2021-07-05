import { appWithTranslation } from 'next-i18next';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);