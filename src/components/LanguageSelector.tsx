'use client'

import { Box, Select, HStack } from '@chakra-ui/react'
import { useRouter, usePathname } from '@/navigation'
import { locales } from '@/config'
import { Locale, isValidLocale } from '@/types'

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
]

export const LanguageSelector = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (isValidLocale(value)) {
      router.replace(pathname, { locale: value })
    }
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
