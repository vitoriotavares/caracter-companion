'use client'

import { Box, Container } from '@chakra-ui/react'
import { CharacterSheet } from '@/components/CharacterSheet'

const mockCharacter = {
  name: 'Piper Stonebend',
  level: 1,
  class: 'Fighter',
  currentHp: 37,
  maxHp: 45,
  ac: 16,
  xp: 950,
  xpNeeded: 1200,
  abilities: {
    Strength: { score: 16, modifier: 2 },
    Dexterity: { score: 14, modifier: 2 },
    Constitution: { score: 15, modifier: 2 },
    Intelligence: { score: 12, modifier: 2 },
    Wisdom: { score: 13, modifier: 2 },
    Charisma: { score: 11, modifier: 2 }
  }
}

export default function Home() {
  return (
    <Container maxW="container.xl" py={8}>
      <CharacterSheet character={mockCharacter} />
    </Container>
  )
}
