import { Box, Select, HStack } from '@chakra-ui/react'
import { useRouter, usePathname } from '@/navigation'
import { locales } from '@/config'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
]

export const LanguageSelector = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <Box position="absolute" top={4} right={4}>
      <Select
        value={currentLocale}
        onChange={handleLanguageChange}
        bg="brand.gray.700"
        borderColor="brand.gray.600"
        w="150px"
        size="sm"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </Select>
    </Box>
  )
}
