import { Box, VStack, HStack, Text, Icon, Grid } from '@chakra-ui/react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

interface Skill {
  name: string
  isProficient: boolean
  bonus: number
  ability: string
}

interface CharacterSkillsProps {
  skills: Skill[]
}

export const CharacterSkills = ({ skills }: CharacterSkillsProps) => {
  const t = useTranslations('character')

  return (
    <Box
      bg="brand.gray.700"
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>{t('skills.title')}</Text>
      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={3}
      >
        {skills.map((skill) => (
          <HStack
            key={skill.name}
            justify="space-between"
            bg="brand.gray.800"
            p={2}
            borderRadius="md"
          >
            <HStack>
              <Icon
                as={skill.isProficient ? FaCheck : FaTimes}
                color={skill.isProficient ? "green.400" : "gray.500"}
                w={4}
                h={4}
              />
              <VStack align="start" spacing={0}>
                <Text fontSize="sm">{t(`skills.${skill.name}`)}</Text>
                <Text fontSize="xs" color="gray.400">({skill.ability})</Text>
              </VStack>
            </HStack>
            <Text color="blue.400" fontWeight="bold">
              {skill.bonus >= 0 ? `+${skill.bonus}` : skill.bonus}
            </Text>
          </HStack>
        ))}
      </Grid>
    </Box>
  )
}
