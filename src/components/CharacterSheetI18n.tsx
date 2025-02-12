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
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaHeart, FaShieldAlt } from 'react-icons/fa'
import { CharacterSkills } from './CharacterSkills_i18n'
import { HitDice } from './HitDice_i18n'
import { Currency } from './Currency_i18n'
import { Equipment } from './Equipment_i18n'
import { useTranslations } from 'next-intl'

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
    skills: Array<{
      name: string
      isProficient: boolean
      bonus: number
      ability: string
    }>
    hitDice: {
      current: number
      total: number
      diceType: string
    }
    currency: {
      cp: number
      sp: number
      ep: number
      gp: number
      pp: number
    }
    equipment: Array<{
      name: string
      quantity: number
      weight?: number
    }>
  }
}

export const CharacterSheet = ({ character }: CharacterSheetProps) => {
  const t = useTranslations('character')
  const isMobile = useBreakpointValue({ base: true, sm: false })
  const columns = useBreakpointValue({
    base: 2,
    sm: 3,
    md: 6,
  })

  const abilityNames = {
    Strength: t('stats.strength'),
    Dexterity: t('stats.dexterity'),
    Constitution: t('stats.constitution'),
    Intelligence: t('stats.intelligence'),
    Wisdom: t('stats.wisdom'),
    Charisma: t('stats.charisma')
  }

  return (
    <VStack spacing={6} w="100%">
      <Box 
        bg="brand.gray.800" 
        p={{ base: 4, sm: 5, md: 6 }} 
        borderRadius="xl"
        w="100%"
      >
        {/* Header */}
        <Flex 
          mb={6} 
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'center', sm: 'flex-start' }}
          gap={4}
        >
          <Box 
            position="relative" 
            w={{ base: "100px", sm: "90px", md: "80px" }} 
            h={{ base: "100px", sm: "90px", md: "80px" }}
            mb={{ base: 2, sm: 0 }}
          >
            <Image
              src="/placeholder-avatar.png"
              alt={character.name}
              borderRadius="full"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <Box flex={1} textAlign={{ base: 'center', sm: 'left' }}>
            <Text fontSize={{ base: 'xl', sm: '2xl' }} fontWeight="bold">
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
              maxW={{ base: '100%', sm: '200px' }}
            />
          </Box>
          <HStack 
            spacing={4} 
            justify={{ base: 'center', sm: 'flex-end' }}
            w={{ base: '100%', sm: 'auto' }}
            mt={{ base: 2, sm: 0 }}
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
          templateColumns={`repeat(${columns}, 1fr)`}
          gap={{ base: 3, sm: 4 }}
          mb={6}
        >
          {Object.entries(character.abilities).map(([ability, { score, modifier }]) => (
            <Box
              key={ability}
              bg="brand.gray.700"
              p={{ base: 3, sm: 4 }}
              borderRadius="lg"
              textAlign="center"
            >
              <Text 
                color="gray.400" 
                fontSize={{ base: 'xs', sm: 'sm' }} 
                textTransform="uppercase"
              >
                {abilityNames[ability as keyof typeof abilityNames]}
              </Text>
              <Text fontSize={{ base: 'lg', sm: 'xl' }} fontWeight="bold">
                {score}
              </Text>
              <Text color="blue.400">
                {modifier >= 0 ? `+${modifier}` : modifier}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Rest Buttons */}
        <HStack spacing={3} w="100%">
          <Button 
            variant="danger" 
            flex={1}
            size={{ base: 'lg', sm: 'md' }}
          >
            {t('rest.short')}
          </Button>
          <Button 
            variant="primary" 
            flex={1}
            size={{ base: 'lg', sm: 'md' }}
          >
            {t('rest.long')}
          </Button>
        </HStack>
      </Box>

      {/* Secondary Information */}
      <SimpleGrid 
        columns={{ base: 1, md: 2 }} 
        spacing={6} 
        w="100%"
      >
        <VStack spacing={6}>
          <CharacterSkills skills={character.skills} />
          <Currency {...character.currency} />
        </VStack>
        <VStack spacing={6}>
          <HitDice {...character.hitDice} />
          <Equipment items={character.equipment} />
        </VStack>
      </SimpleGrid>
    </VStack>
  )
}
