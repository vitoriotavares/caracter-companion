import {
  Box,
  Grid,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Progress,
  Icon,
  Button,
} from '@chakra-ui/react'
import { FaHeart, FaShieldAlt } from 'react-icons/fa'

interface CharacterSheetProps {
  character: {
    name: string
    level: number
    class: string
    currentHp: number
    maxHp: number
    ac: number
    xp: number
    xpNeeded: number
    abilities: {
      [key: string]: {
        score: number
        modifier: number
      }
    }
  }
}

export const CharacterSheet = ({ character }: CharacterSheetProps) => {
  return (
    <Box bg="brand.gray.800" p={6} borderRadius="xl">
      {/* Header */}
      <Flex mb={6} align="center" gap={4}>
        <Box position="relative" w="80px" h="80px">
          <Image
            src="/placeholder-avatar.png"
            alt={character.name}
            borderRadius="full"
          />
        </Box>
        <Box flex={1}>
          <Text fontSize="2xl" fontWeight="bold">{character.name}</Text>
          <Text color="gray.400">{character.class} {character.level}</Text>
          <Progress
            value={(character.xp / character.xpNeeded) * 100}
            size="sm"
            colorScheme="blue"
            mt={2}
          />
        </Box>
        <HStack spacing={4}>
          <VStack>
            <Icon as={FaHeart} color="red.400" w={6} h={6} />
            <Text>{character.currentHp}/{character.maxHp}</Text>
          </VStack>
          <VStack>
            <Icon as={FaShieldAlt} color="blue.400" w={6} h={6} />
            <Text>{character.ac}</Text>
          </VStack>
        </HStack>
      </Flex>

      {/* Abilities */}
      <Grid templateColumns="repeat(6, 1fr)" gap={4} mb={6}>
        {Object.entries(character.abilities).map(([ability, { score, modifier }]) => (
          <Box
            key={ability}
            bg="brand.gray.700"
            p={4}
            borderRadius="lg"
            textAlign="center"
          >
            <Text color="gray.400" fontSize="sm" textTransform="uppercase">
              {ability}
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              {score}
            </Text>
            <Text color="blue.400">
              {modifier >= 0 ? `+${modifier}` : modifier}
            </Text>
          </Box>
        ))}
      </Grid>

      {/* Rest Buttons */}
      <HStack spacing={4}>
        <Button variant="danger" flex={1}>
          Short Rest
        </Button>
        <Button variant="primary" flex={1}>
          Long Rest
        </Button>
      </HStack>
    </Box>
  )
}
