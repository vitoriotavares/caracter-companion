import { Box, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react'

interface CurrencyProps {
  cp: number
  sp: number
  ep: number
  gp: number
  pp: number
}

export const Currency = ({ cp, sp, ep, gp, pp }: CurrencyProps) => {
  const currencies = [
    { label: 'CP', value: cp },
    { label: 'SP', value: sp },
    { label: 'EP', value: ep },
    { label: 'GP', value: gp },
    { label: 'PP', value: pp },
  ]

  return (
    <Box
      bg="brand.gray.700"
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>Currency</Text>
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
