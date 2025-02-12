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
  useBreakpointValue,
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
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box 
      bg="brand.gray.800" 
      p={{ base: 4, md: 6 }} 
      borderRadius="xl"
      mx={{ base: 2, md: 0 }}
    >
      {/* Header */}
      <Flex 
        mb={6} 
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        gap={4}
      >
        <Box 
          position="relative" 
          w={{ base: "100px", md: "80px" }} 
          h={{ base: "100px", md: "80px" }}
          mb={{ base: 2, md: 0 }}
        >
          <Image
            src="/placeholder-avatar.png"
            alt={character.name}
            borderRadius="full"
          />
        </Box>
        <Box flex={1} textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
            {character.name}
          </Text>
          <Text color="gray.400">
            {character.class} {character.level}
          </Text>
          <Progress
            value={(character.xp / character.xpNeeded) * 100}
            size="sm"
            colorScheme="blue"
            mt={2}
            maxW={{ base: '100%', md: '200px' }}
          />
        </Box>
        <HStack 
          spacing={4} 
          justify={{ base: 'center', md: 'flex-end' }}
          w={{ base: '100%', md: 'auto' }}
          mt={{ base: 2, md: 0 }}
        >
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
      <Grid 
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(6, 1fr)'
        }}
        gap={{ base: 3, md: 4 }}
        mb={6}
      >
        {Object.entries(character.abilities).map(([ability, { score, modifier }]) => (
          <Box
            key={ability}
            bg="brand.gray.700"
            p={{ base: 3, md: 4 }}
            borderRadius="lg"
            textAlign="center"
          >
            <Text 
              color="gray.400" 
              fontSize={{ base: 'xs', md: 'sm' }} 
              textTransform="uppercase"
            >
              {ability}
            </Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
              {score}
            </Text>
            <Text color="blue.400">
              {modifier >= 0 ? `+${modifier}` : modifier}
            </Text>
          </Box>
        ))}
      </Grid>

      {/* Rest Buttons */}
      <VStack 
        spacing={3}
        w="100%"
      >
        <Button 
          variant="danger" 
          w="100%"
          size={{ base: 'lg', md: 'md' }}
        >
          Short Rest
        </Button>
        <Button 
          variant="primary" 
          w="100%"
          size={{ base: 'lg', md: 'md' }}
        >
          Long Rest
        </Button>
      </VStack>
    </Box>
  )
}
