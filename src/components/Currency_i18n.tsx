import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

interface CurrencyProps {
  cp: number
  sp: number
  ep: number
  gp: number
  pp: number
}

export const Currency = ({ cp, sp, ep, gp, pp }: CurrencyProps) => {
  const t = useTranslations('character')

  const currencies = [
    { label: t('currency.cp'), value: cp },
    { label: t('currency.sp'), value: sp },
    { label: t('currency.ep'), value: ep },
    { label: t('currency.gp'), value: gp },
    { label: t('currency.pp'), value: pp },
  ]

  return (
    <Box
      bg="brand.gray.700"
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>{t('currency.title')}</Text>
      <SimpleGrid columns={5} spacing={2}>
        {currencies.map(({ label, value }) => (
          <VStack key={label} spacing={1}>
            <Text fontSize="xs" color="gray.400">{label}</Text>
            <Text fontWeight="bold">{value}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
