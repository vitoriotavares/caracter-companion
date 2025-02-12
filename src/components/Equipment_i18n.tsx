import { Box, Text, VStack, HStack, Icon, Button } from '@chakra-ui/react'
import { FaBackpack, FaPlus } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

interface EquipmentItem {
  name: string
  quantity: number
  weight?: number
}

interface EquipmentProps {
  items: EquipmentItem[]
}

export const Equipment = ({ items }: EquipmentProps) => {
  const t = useTranslations('character')

  return (
    <Box
      bg="brand.gray.700"
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <HStack justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">{t('equipment.title')}</Text>
        <Button
          size="sm"
          variant="ghost"
          leftIcon={<FaPlus />}
          colorScheme="blue"
        >
          {t('equipment.add')}
        </Button>
      </HStack>
      <VStack align="stretch" spacing={2}>
        {items.map((item, index) => (
          <HStack
            key={index}
            justify="space-between"
            bg="brand.gray.800"
            p={2}
            borderRadius="md"
          >
            <HStack>
              <Icon as={FaBackpack} color="gray.400" />
              <Text>{item.name}</Text>
            </HStack>
            <HStack spacing={4}>
              <Text color="gray.400" fontSize="sm">
                {t('equipment.quantity', { count: item.quantity })}
              </Text>
              {item.weight && (
                <Text color="gray.400" fontSize="sm">
                  {item.weight} lb
                </Text>
              )}
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}
