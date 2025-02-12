import { Box, HStack, Text, Button, VStack } from '@chakra-ui/react'
import { FaDice } from 'react-icons/fa'

interface HitDiceProps {
  current: number
  total: number
  diceType: string
}

export const HitDice = ({ current, total, diceType }: HitDiceProps) => {
  return (
    <Box
      bg="brand.gray.700"
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <VStack align="stretch" spacing={3}>
        <HStack justify="space-between">
          <Text fontSize="lg" fontWeight="bold">Hit Dice</Text>
          <Text color="blue.400">
            {current}/{total} {diceType}
          </Text>
        </HStack>
        <Button
          leftIcon={<FaDice />}
          variant="outline"
          colorScheme="blue"
          size="sm"
        >
          Roll Hit Die
        </Button>
      </VStack>
    </Box>
  )
}
