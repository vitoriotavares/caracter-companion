import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Providers } from '../providers';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}
 
export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
