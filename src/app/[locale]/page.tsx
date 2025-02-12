'use client'

import { Box, Container } from '@chakra-ui/react'
import { CharacterSheet } from '@/components/CharacterSheetI18n'
import { LanguageSelector } from '@/components/LanguageSelector'
import { useParams } from 'next/navigation'

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
  },
  skills: [
    { name: 'athletics', isProficient: true, bonus: 4, ability: 'STR' },
    { name: 'sleightOfHand', isProficient: false, bonus: 4, ability: 'DEX' },
    { name: 'history', isProficient: true, bonus: 4, ability: 'INT' },
    { name: 'investigation', isProficient: false, bonus: 4, ability: 'INT' },
    { name: 'nature', isProficient: false, bonus: 4, ability: 'INT' },
    { name: 'animalHandling', isProficient: false, bonus: 4, ability: 'WIS' },
    { name: 'insight', isProficient: true, bonus: 4, ability: 'WIS' },
    { name: 'medicine', isProficient: false, bonus: 4, ability: 'WIS' },
    { name: 'perception', isProficient: true, bonus: 4, ability: 'WIS' },
    { name: 'survival', isProficient: false, bonus: 4, ability: 'WIS' },
    { name: 'deception', isProficient: false, bonus: 4, ability: 'CHA' },
    { name: 'intimidation', isProficient: true, bonus: 4, ability: 'CHA' },
    { name: 'performance', isProficient: false, bonus: 4, ability: 'CHA' },
    { name: 'persuasion', isProficient: false, bonus: 4, ability: 'CHA' }
  ],
  hitDice: {
    current: 1,
    total: 2,
    diceType: 'd10'
  },
  currency: {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 15,
    pp: 0
  },
  equipment: [
    { name: 'Longsword', quantity: 1, weight: 3 },
    { name: 'Chain Mail', quantity: 1, weight: 55 },
    { name: 'Shield', quantity: 1, weight: 6 },
    { name: 'Backpack', quantity: 1, weight: 5 },
    { name: 'Rations (1 day)', quantity: 5, weight: 2 }
  ]
}

export default function Home() {
  const params = useParams()
  const locale = params.locale as string

  return (
    <Container 
      maxW={{ base: "100%", md: "container.xl" }} 
      p={{ base: 0, md: 8 }}
      position="relative"
    >
      <LanguageSelector currentLocale={locale} />
      <CharacterSheet character={mockCharacter} />
    </Container>
  )
}
